/**
    @overview Escape HTML tags in descriptions.
    @module plugins/escapeHtml
    @author Michael Mathews <micmath@gmail.com>
 */
'use strict';

exports.handlers = {
    /**
        Translate HTML tags in descriptions into safe entities.
        Replaces <, & and newlines
     */
    newDoclet: function(e) {
        if (e.doclet.description) {
            e.doclet.description = e.doclet.description
                                   .replace(/&/g, '&amp;')
                                   .replace(/</g, '&lt;')
                                   .replace(/\r\n|\n|\r/g, '<br>');
        }
    }
};
