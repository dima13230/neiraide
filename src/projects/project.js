var Project = /** @class */ (function () {
    function Project() {
    }
    Project.prototype.Project = function (path) {
        $.getJSON(path, function (json) {
            var name = json['name'];
            var files = json['files'];
        });
    };
    return Project;
}());
//# sourceMappingURL=project.js.map