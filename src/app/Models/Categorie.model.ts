export class Categorie {
    private name: string;
    private description: string;
    constructor(name: string, description: string) {
        this.description = description;
        this.name = name;
    }

    initValues() {
        this.name = '';
        this.description = '';
    }

    isEmpty() {
        return (this.name === '' || this.description === '') ? true : false;
    }
}