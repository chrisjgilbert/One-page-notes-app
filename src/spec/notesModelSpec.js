'use strict';

var testjs = new TestJS();

testjs.test('#notes a note can store text', function() {
    var note = new Note("my test note");
    testjs.assertEquals(note.text, 'my test note');
});

testjs.test('#notes is under 20 characters in length', function() {
    var note = new Note("thisisover20charactersinlengthibelieve");
    testjs.assertEquals(note.shortenedText, 'thisisover20characte');
});

// testjs.test('#controller write test here', function() {
//     var note = new Note("my test note");
//     testjs.assertEquals(note.text, 'my test note');
// });
//
// testjs.test('#controller write test here', function() {
//     var note = new Note("thisisover20charactersinlengthibelieve");
//     testjs.assertEquals(note.shortenedText, 'thisisover20characte');
// });
