
function DatabaseEventHandler() {

    this.databaseCreated = function(databaseDescriptor) {
//        alert("databaseCreated");
    }


    this.databaseDropped = function(databaseDescriptor) {
//        alert("databaseDropped");
    }


    this.tableCreated = function(databaseDescriptor, databaseMappingDescriptor) {
//        alert("tableCreated");
    }


    this.tableDropped = function(databaseDescriptor, databaseMappingDescriptor) {
//        alert("tableDropped");
    }


    this.indexCreated = function(databaseDescriptor, databaseMappingDescriptor, index) {
//        alert("indexCreated");
    }


    this.indexDropped = function(databaseDescriptor, databaseMappingDescriptor, index) {
//        alert("indexDropped");
    }

}
