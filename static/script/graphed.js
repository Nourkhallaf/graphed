import {api} from '/static/script/api.js';

// api.registerUser("test", "testhello", function() {});

api.getToken("test", "testhello", function(token) {
  api.createWorkspace("creating", function(workspace_id) {
    console.log(workspace_id);
    api.createNote(workspace_id, "blubber", function(note) {
      console.log(note);
      api.createNote(workspace_id, "tada", function(note) {
        console.log(note);
        api.getWorkspace(workspace_id, function(notes) {
          console.log(notes);
        });
      });
    });
  });
});
