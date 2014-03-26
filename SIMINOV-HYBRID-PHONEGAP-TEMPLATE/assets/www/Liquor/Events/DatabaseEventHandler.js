
function DatabaseEventHandler() {

    this.onDatabaseCreated = function(databaseDescriptor) {
//        alert("databaseCreated");
    }


    this.onDatabaseDropped = function(databaseDescriptor) {
//        alert("databaseDropped");
    }


    this.onTableCreated = function(databaseDescriptor, databaseMappingDescriptor) {
//        alert("tableCreated");
    }


    this.onTableDropped = function(databaseDescriptor, databaseMappingDescriptor) {
//        alert("tableDropped");
    }


    this.onIndexCreated = function(databaseDescriptor, databaseMappingDescriptor, index) {
//        alert("indexCreated");
    }


    this.onIndexDropped = function(databaseDescriptor, databaseMappingDescriptor, index) {
//        alert("indexDropped");
    }

}
