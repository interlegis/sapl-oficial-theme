import 'jquery-ui-themes/themes/cupertino/jquery-ui.min.css'
import 'webpack-jquery-ui/datepicker'
import 'jquery-ui/ui/i18n/datepicker-pt-BR'

// TinyMCE - colocado nos temas pois é independente e pode ser trocado
import 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import 'tinymce/plugins/table'
import 'tinymce/plugins/code'
import 'tinymce/plugins/save'

import "./scss/app.scss";
import "./js/functions"

window.refreshDatePicker();

// Existem templates que chamam o editor através dessa function.
// encasule seu editor rico nesta function com o que for passado como parametro
window.initTextRichEditor("texto-rico");