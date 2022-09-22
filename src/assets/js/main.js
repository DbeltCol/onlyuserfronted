$('#file').change(function(e) {
  var filename = e.target.files[0].name
  console.log(filename);
  $('span').html(filename);
});

class ChipModal {
    constructor(config) {
        var me = this;
        me.selected = {};
        if (config.hasOwnProperty('selected')) {
            config.selected.forEach(option => {
                me.selected[option] = config.options[option];
            });
        }
        
        me.container = document.getElementById(config.id);
        if (!me.container) {
            throw `Container element not found for id ${config.id}`;
        }

        me.input = me.parse(`<input class="chip-modal-input ${config.id}-cls" placeholder="${config.placeholder}">`);
        me.container.append(me.input);
        
        M.Chips.init(me.container, {
            onChipAdd: (c) => {
                me.input.classList.add('chip-modal-input-hide');
            },
        });
        me.modal = me.initModal(config);
        me.container.addEventListener('click', (e) => {            
            me.modal.open();
        });
        
        me.container = document.getElementById(config.id);
    }

    initModal(config) {
        var me = this;
        var checksHtml = [];
        for(var [key, value] of Object.entries(config.options)) {
            var checkId = config.id + '-chk-' + key;
            checksHtml.push(`<div class="col s6">
                    <div class="chip-modal-check-list-item hoverable">
                    <label for="${checkId}">
                        <input
                            id="${checkId}"
                            data-id="${key}"
                            type="checkbox"
                            class="filled-in chip-modal-chk"
                            value="${value}"
                            />
                        <span>${value}</span>
                    </label>
                    </div>
                 </div>`);
        }
        
        var modalId = config.id + '-modal';
        var checks = checksHtml.join('');
        var modalHtml = `<div id="${modalId}" class="modal chip-modal">
            <div class="modal-content">
                <h5>${config.title}</h5>
                <p>${config.description}</p>
                <form><div class="row">${checks}</div></form>
            </div>
            <div class="modal-footer">
                <button id="application-modal-ok" class="modal-close waves-effect waves-white btn-flat">Ok</button>
            </div>
        </div>`;
        document.querySelector('body').append(me.parse(modalHtml));
        
        var chips = M.Chips.getInstance(me.container);
        var modalEl = document.getElementById(modalId);
        var checks = modalEl.querySelectorAll('.chip-modal-chk');
        
        var instance = M.Modal.init(modalEl, {
            preventScrolling: false,
            onOpenStart: () => {
                checks.forEach((check) => {
                    check.checked = me.selected.hasOwnProperty(check.dataset.id);
                    check.addEventListener('change', () => {
                        if (check.checked) {
                            chips.addChip({
                                tag: check.value,
                            });
                            me.selected[check.dataset.id] = check.value;
                            return;
                        }

                        let index = Object.keys(me.selected).indexOf(check.dataset.id);
                        if (index === -1) {
                            return;
                        }
                        
                        chips.deleteChip(index);
                        delete me.selected[check.dataset.id];
                        if (Object.keys(me.selected).length == 0) {
                            me.input.classList.remove('chip-modal-input-hide');
                        }
                    });
                });
            },
        });
        
        var items = modalEl.querySelectorAll('.chip-modal-check-list-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                var check = item.querySelector('input');
                check.checked = check.checked != true;
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);
                check.dispatchEvent(evt);
            });
        });
        
        for([key, value] of Object.entries(me.selected)) {
            chips.addChip({
                tag: value
            });
        }
        
        return instance;
    }
    
    parse(str) {
        let temp = document.createElement('template');
        str = str.trim();
        temp.innerHTML = str;
        return temp.content.firstChild;        
    }
}

var chipModalThings = new ChipModal({
    id: 'test-input',
    placeholder: 'Select things',
    title: 'Select things',
    description: 'Select some things',
    options: {'thing1': 'Thing 1', 'thing2': 'Thing 2', 'somethingelse': 'Something else'}
});

var chipModalDogs = new ChipModal({
    id: 'test-input-2',
    placeholder: 'Select dogs',
    title: 'Select dogs',
    description: 'Select some things',
    options: {'smalldog': 'Small dog', 'bigdog': 'Big dog', 'reddog': 'Red dog', 'green': 'Green dog'},
    selected: ['reddog']
});

