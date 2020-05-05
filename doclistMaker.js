const fs = require('fs');
const path = require('path');

function traverse_dir(dirpath, relpath="") {
    var dirents = fs.readdirSync(dirpath, {withFileTypes: true});
    var fnames = [];
    for (const dirent of dirents) {
        const name = dirent.name;

        if (dirent.isDirectory()) {
            var dirpath_child = path.join(dirpath, name);
            var relpath_child = path.join(relpath, name);
            fnames = fnames.concat(
                traverse_dir(dirpath_child, relpath_child));
        } else if (name.endsWith(".md")) { 
            fnames.push({
                path: path.join(relpath,  name),
                name: name.split(".md")[0]
            });
        }
    }

    return fnames;
}

function make_list(dirpath) {
    var fnames = traverse_dir(dirpath).sort((a, b) => {return +(b > a)*2-1;});

    fs.writeFile(
        path.join(dirpath, "list.json"), JSON.stringify(fnames), (err) => {
        if (err) console.error(err);
    });
}

_BASE_PATH = "./static/docs/";
_TARGETS = ["papers", "projects", "stuffs"];

for (var targ of _TARGETS) {
    make_list(_BASE_PATH + targ)
}