import $ from 'jquery';
import { Selectors } from '../constants';

const javascriptService = () => {
    $('body').append(`
        <script>
            $('span.ctc-select-all').on('change', e => {
                var isChecked = e.target.checked;
                console.log((isChecked ? 'S' : 'Uns') + 'elected all items.');
                $('input.ctc-select').prop('checked', isChecked);
            });
        </script>
    `);
}

export default javascriptService;