class Project {
    public Project(path : string) {
        $.getJSON(path, function(json) {
            let name : string = json['name'];
            let files : string[] = json['files'];
        });
    }
}