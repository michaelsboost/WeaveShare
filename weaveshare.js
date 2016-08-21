var selected_text, str, mynum, start_cursor, cursorLine, cursorCh,
    charGeneration = function() {
      document.getElementById("restartapp").onclick = function() {
        location.reload(true);
      };
      document.getElementById("undo").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          editor.undo();
        }
      };
      document.getElementById("redo").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          editor.redo();
        }
      };
      document.getElementById("tabindent").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          editor.execCommand("indentMore");
          editor.focus();
        }
      };
      document.getElementById("taboutdent").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          editor.execCommand("indentLess");
          editor.focus();
        }
      };
      document.getElementById("zeninit").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          editor.execCommand("emmet.expand_abbreviation_with_tab");
          editor.focus();
        }
      };
      document.getElementById("charsym1").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          if (!editor.getSelection().split(" ").join("")) {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("", editor.getCursor());
            editor.replaceRange("<>", editor.getCursor());
            editor.focus();
            str = ">";
            mynum = str.length;
            start_cursor = editor.getCursor();  // Need to get the cursor position
            cursorLine = start_cursor.line;
            cursorCh = start_cursor.ch;

            // Code to move cursor back [x] amount of spaces. [x] is the data-val value.
            editor.setCursor({line: cursorLine , ch : cursorCh -mynum });
            editor.replaceRange(selected_text, editor.getCursor());
            editor.focus();
          }
        }
      };
      document.getElementById("charsym2").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          if (!editor.getSelection().split(" ").join("")) {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("", editor.getCursor());
            editor.replaceRange("{}", editor.getCursor());
            editor.focus();
            str = "}";
            mynum = str.length;
            start_cursor = editor.getCursor();  // Need to get the cursor position
            cursorLine = start_cursor.line;
            cursorCh = start_cursor.ch;

            // Code to move cursor back [x] amount of spaces. [x] is the data-val value.
            editor.setCursor({line: cursorLine , ch : cursorCh -mynum });
            editor.replaceRange(selected_text, editor.getCursor());
            editor.focus();
          } else {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("{" + selected_text + "}");
            editor.focus();
          }
        }
      };
      document.getElementById("charsym3").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          if (!editor.getSelection().split(" ").join("")) {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("", editor.getCursor());
            editor.replaceRange('""', editor.getCursor());
            editor.focus();
            str = '"';
            mynum = str.length;
            start_cursor = editor.getCursor();  // Need to get the cursor position
            cursorLine = start_cursor.line;
            cursorCh = start_cursor.ch;

            // Code to move cursor back [x] amount of spaces. [x] is the data-val value.
            editor.setCursor({line: cursorLine , ch : cursorCh -mynum });
            editor.replaceRange(selected_text, editor.getCursor());
            editor.focus();
          } else {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection('"' + selected_text + '"');
            editor.focus();
          }
        }
      };
      document.getElementById("charsym4").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          if (!editor.getSelection().split(" ").join("")) {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("", editor.getCursor());
            editor.replaceRange("''", editor.getCursor());
            editor.focus();
            str = "'";
            mynum = str.length;
            start_cursor = editor.getCursor();  // Need to get the cursor position
            cursorLine = start_cursor.line;
            cursorCh = start_cursor.ch;

            // Code to move cursor back [x] amount of spaces. [x] is the data-val value.
            editor.setCursor({line: cursorLine , ch : cursorCh -mynum });
            editor.replaceRange(selected_text, editor.getCursor());
            editor.focus();
          } else {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("'" + selected_text + "'");
            editor.focus();
          }
        }
      };
      document.getElementById("charsym5").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          if (!editor.getSelection().split(" ").join("")) {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("", editor.getCursor());
            editor.replaceRange("()", editor.getCursor());
            editor.focus();
            str = ")";
            mynum = str.length;
            start_cursor = editor.getCursor();  // Need to get the cursor position
            cursorLine = start_cursor.line;
            cursorCh = start_cursor.ch;

            // Code to move cursor back [x] amount of spaces. [x] is the data-val value.
            editor.setCursor({line: cursorLine , ch : cursorCh -mynum });
            editor.replaceRange(selected_text, editor.getCursor());
            editor.focus();
          } else {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("(" + selected_text + ")");
            editor.focus();
          }
        }
      };
      document.getElementById("charsym6").onclick = function() {
        if ( activeEditor.value === "editor" ) {
          if (!editor.getSelection().split(" ").join("")) {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("", editor.getCursor());
            editor.replaceRange("[]", editor.getCursor());
            editor.focus();
            str = "]";
            mynum = str.length;
            start_cursor = editor.getCursor();  // Need to get the cursor position
            cursorLine = start_cursor.line;
            cursorCh = start_cursor.ch;

            // Code to move cursor back [x] amount of spaces. [x] is the data-val value.
            editor.setCursor({line: cursorLine , ch : cursorCh -mynum });
            editor.replaceRange(selected_text, editor.getCursor());
            editor.focus();
          } else {
            selected_text = editor.getSelection();  // Need to grab the Active Selection

            editor.replaceSelection("[" + selected_text + "]");
            editor.focus();
          }
        }
      };
      $("[data-add=sym]").on("click", function() {
        if ( activeEditor.value === "editor" ) {
          selected_text = editor.getSelection();  // Need to grab the Active Selection

          editor.replaceSelection(selected_text + this.textContent);
          editor.focus();
        }
      });
    },
    responsiveUI   = function() {
      // Select active editor when clicked/touched
      $("#editor").on("mousedown touchend", function() {
        $("input[name=menubar].active").trigger("click");

        if ( this.id === "editor" ) {
          activeEditor.value = "editor";
        }
      });

      // Handle Menu Dropdowns
      $("input[name=menubar]").on("change", function() {
        $(this).toggleClass("active");
        $("input[name=menubar]:checkbox").not(this).removeClass("active").prop("checked", false);
      });
    },
    loadFiles      = function() {
      /**
       * Chooser (Drop Box)
       * https://www.dropbox.com/developers/dropins/chooser/js
       */
      options = {
          success: function(file) {
            editor.setValue("");
            download_to_editor(file[0].link, editor);
            
            setTimeout(function() {
              editor.setOption("paletteHints", "true");
            }, 300);
            
            window.close();
          },
          // error: function(e) {
          //   alertify.error("Oops there's been an error: " + e);
          //   console.error(e);
          // },
          cancel: function() {
            // optional
          },
          linkType: "direct", // "preview" or "direct"
          multiselect: false // true or false
          // extensions: [".html", ".jade", ".css", ".js", ".coffee", ".md", ".svg"]
      };

      document.querySelector("[data-action=open-dropbox]").onclick = function() {
        Dropbox.choose(options);
      };

      TogetherJS.hub.on("togetherjs.hello togetherjs.hello-back", function() {
        TogetherJS.reinitialize();
      });

      // Load Files Into Editor
      $("#loadfile").on("change", function() {
        loadfile(this);
      });

      function loadfile(input) {
        var reader = new FileReader();
        reader.onload = function(e) {
          // var path = input.value.replace(/.*(\/|\\)/, '');
          var path = input.value;
          editor.setValue("").setValue( e.target.result );
        };
        $("input[name=menubar].active").trigger("click");
        reader.readAsText(input.files[0]);
        
        setTimeout(function() {
          editor.setOption("paletteHints", "true");
        }, 300);
      }

      if (window.File && window.FileReader && window.FileList && window.Blob) {

      } else {
        alertify.error("The File APIs are not fully supported in this browser.");
      }
    },
    initCollab     = function() {
      function callCollabUpdate() {
        var updatehtml = editor.getValue();
        if (TogetherJS.running) {
          TogetherJS.send({
            type: "update-html",
            output: updatehtml
          });
        }
      }

      // Update TogetherJS
      TogetherJS.hub.on("update-html", function(msg) {
        if (!msg.sameUrl) {
            return;
        }
        editor.setValue(msg.output);
      });
      
      $("#collaborate").click(function() {
        TogetherJS(this);
        return false;
      });
    },
    activeEditor   = document.querySelector("[data-action=activeEditor]"),
    storeValues    = function() {
      // Save WeaveName Value for LocalStorage
      if ( localStorage.getItem("WeaveName")) {
        $("[data-action=weavename]").val(localStorage.getItem("WeaveName"));
      }
      $("[data-action=weavename]").on("keyup change", function() {
        localStorage.setItem("WeaveName", this.value);
      });
      // Save fontSize Value for LocalStorage
      if ( localStorage.getItem("fontSize")) {
        document.querySelector("[data-editor=fontSize]").value = localStorage.getItem("fontSize");
        $(".CodeMirror").css("font-size", localStorage.getItem("fontSize") + "px");
      }
      $("[data-editor=fontSize]").on("keyup change", function() {
        $(".CodeMirror").css("font-size", this.value + "px");
        localStorage.setItem("fontSize", this.value);
      });
      // Save Theme Value for LocalStorage
      if ( localStorage.getItem("WeaveTheme")) {
        $("[data-select=theme]").val(localStorage.getItem("WeaveTheme"));
      }
      $("[data-select=theme]").on("keyup change", function() {
        localStorage.setItem("WeaveTheme", this.value);
      });
      // Save Theme Value for LocalStorage
      if ( localStorage.getItem("WeaveMode")) {
        $("[data-select=mode]").val(localStorage.getItem("WeaveMode"));
      }
      $("[data-select=mode]").on("keyup change", function() {
        localStorage.setItem("WeaveMode", this.value);
      });
    },
    download_to_textbox = function (url, el) {
      return $.get(url, null, function (data) {
        el.val(data);
      }, "text");
    },
    download_to_editor  = function (url, el) {
      return $.get(url, null, function (data) {
        el.setValue(data);
      }, "text");
    };

// Initialize Editor
var editor = CodeMirror(document.getElementById("editor"), {
  tabMode: "indent",
  styleActiveLine: true,
  lineNumbers: true,
  lineWrapping: true,
  autoCloseTags: true,
  foldGutter: true,
  dragDrop: true,
  lint: true,
  gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  extraKeys: {
    "Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); },
    "Cmd-L": function(){ $("[data-action=gotoline]").trigger("click"); },
    "Ctrl-L": function(){ $("[data-action=gotoline]").trigger("click"); },
    "Alt-Delete": function(cm){ cm.execCommand("delWordAfter"); },
    "Alt-Shift-Cmd-[": function(cm){ 
      for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
        cm.foldCode({line: l, ch: 0}, null, "fold");
      }
    },
    "Alt-Shift-Ctrl-[": function(cm){ 
      for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
        cm.foldCode({line: l, ch: 0}, null, "fold");
      }
    },
    "Alt-Shift-Cmd-]": function(cm){ 
      for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
        cm.foldCode({line: l, ch: 0}, null, "unfold");
      }
    },
    "Alt-Shift-Ctrl-]": function(cm){ 
      for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
        cm.foldCode({line: l, ch: 0}, null, "unfold");
      }
    }
  },
  value: "",
  paletteHints: true
});
Inlet(editor);
emmetCodeMirror(editor);
$("#editor").on("mousedown touchstart", function() {
  $("input[name=menubar].active").trigger("click");  
});
editor.on("change", function() {
  localStorage.setItem("editorData", editor.getValue());

  setTimeout(function() {
    editor.setOption("paletteHints", "true");
  }, 300);
});
editor.on("drop", function() {
  editor.setValue("");
});

// Save editor's value
if ( localStorage.getItem("editorData")) {
  editor.setValue(localStorage.getItem("editorData"));
}
storeValues();

// Change editor's theme
var inputTheme = document.querySelector("[data-select=theme");
function selectTheme() {
  var theme = inputTheme.options[inputTheme.selectedIndex].textContent;
  editor.setOption("theme", theme);
}
inputTheme.onchange = function() {
  selectTheme();
};
selectTheme();

// Change editor's mode
var inputMode = document.querySelector("[data-select=mode");
function selectMode() {
  var mode = inputMode.options[inputMode.selectedIndex].value;
  if (!mode) {
    editor.setOption("mode", "plain text");
  }
  editor.setOption("mode", mode);
  editor.refresh();
}
inputMode.onchange = function() {
  selectMode();
};
selectMode();

responsiveUI();
loadFiles();

var hash = window.location.hash.substring(1);
function loadgist(gistid) {
  $.ajax({
    url: "https://api.github.com/gists/" + gistid,
    type: "GET",
    dataType: "jsonp",
    jsonp: "callback"
  }).success(function(gistdata) {
    var editorVal  = gistdata.data.files["code"];
    var settings   = gistdata.data.files["settings.json"].content;
    var jsonSets   = JSON.parse(settings);

    // Return font settings from json
    document.querySelector("[data-action=weavename]").value = jsonSets.weaveName;
    document.querySelector("[data-editor=fontSize]").value = jsonSets.editorFontSize;
    document.querySelector("[data-select=theme]").value = jsonSets.theme;
    document.querySelector("[data-select=mode]").value = jsonSets.mode;
    storeValues();

    // Return the editor's values
    if (editorVal) {
      editor.setValue(mdVal.content);
    }

    setTimeout(function() {
      editor.setOption("paletteHints", "true");
    }, 300);
    $(".preloader").remove();
  }).error(function(e) {
    // ajax error
    console.warn("Error: Could not load weave!", e);
    alertify.error("Error: Could not load weave!");
  });
}
if (window.location.hash) {
  $(document.body).append('<div class="fixedfill preloader" style="background: radial-gradient(ellipse at center, rgba(122, 188, 255, 0.85) 0%, rgba(64, 150, 238, 0.87) 100%)!important; color: #fff!important;"></div>');
  $(".preloader").html('<div class="table"><div class="cell"><h1>Loading Weave!</h1><div class="spinner"><div class="bounce1" style="background: #fff!important;"></div><div class="bounce2" style="background: #fff!important;"></div><div class="bounce3" style="background: #fff!important;"></div></div></div></div>');
  loadgist(hash);
} else {
  setTimeout(function() {
    editor.setOption("paletteHints", "true");
  }, 300);
}

// Save as a Gist Online
document.querySelector("[data-action=save-gist]").onclick = function() {
  $("input[name=menubar].active").trigger("click");

  // Return user settings
  var sArr = {
    "weaveName"     : document.querySelector("[data-action=weavename]").value,
    "editorFontSize": document.querySelector("[data-editor=fontSize]").value,
    "theme"         : document.querySelector("[data-select=theme]").value,
    "mode"          : document.querySelector("[data-select=mode]").value
  };

  var files = {};
	if (editor.getValue()) {
      files["code"] = editor.getValue() ? { content: editor.getValue() } : null;
	}
	files["settings.json"] = { "content": JSON.stringify(sArr) };

  data = {
    "public": true,
    "files": files
  };
  
  // Post on Github via JQuery Ajax
  $.ajax({
    url: "https://api.github.com/gists",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(data)
  }).success(function(e) {
    window.location.hash = e.html_url.split("https://gist.github.com/").join("");
    hash = window.location.hash.replace(/#/g,"");
    
    embedProject = e.html_url.split("https://gist.github.com/").join("");
    // document.querySelector("[data-output=projectURL]").value = "https://gist.github.com/" + embedProject;
    document.querySelector("[data-output=projectURL]").value = window.location.href;
    document.querySelector("[data-output=projectURL]").onclick = function() {
      this.select(true);
    };

    $(".share-facebook").attr("href", "https://www.facebook.com/sharer/sharer.php?u=https%3A//gist.github.com/" + hash);
    $(".share-twitter").attr("href", "https://twitter.com/home?status=Checkout%20my%20"+ document.querySelector("[data-action=weavename]").value.split(" ").join("%20") +"%20%23weave%20on%20%23WeaveShare%20%20-%20https%3A//gist.github.com/" + hash);
    $(".share-gplus").attr("href", "https://plus.google.com/share?url=https%3A//gist.github.com/" + hash);
    $(".share-instagram").attr("href", "https://www.linkedin.com/shareArticle?mini=true&url=https%3A//gist.github.com/"+ hash +"&title=Checkout%20my%20%23weave%20on%20%23WeaveShare%3A%20&summary=&source=");
    $("[data-action=socialdialog]").fadeIn();

    // Let user view gist
    alertify.success("Your weave is saved!");
  }).error(function(e) {
    console.warn("Error: Could not save weave!", e);
    alertify.error("Error: Could not save weave!");
  });
};
// Cancel Social Sharing
document.querySelector("[data-action=social-cancel]").onclick = function() {
  $("[data-action=socialdialog]").fadeOut();
  document.getElementById("clearSharePreview").innerHTML = "";
};

charGeneration();

// Scroll Character Menu
(function() {
  function scrollMenu(e) {
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById('charmenu').scrollLeft -= (delta*40); // Multiplied by 40
    return false;
  }
  if (document.getElementById('charmenu').addEventListener) {
    // IE9, Chrome, Safari, Opera
    document.getElementById('charmenu').addEventListener('mousewheel', scrollMenu, false);
    // Firefox
    document.getElementById('charmenu').addEventListener('DOMMouseScroll', scrollMenu, false);
  } else {
    // IE 6/7/8
    document.getElementById('charmenu').attachEvent('onmousewheel', scrollMenu);
  }
})();