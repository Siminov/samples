
function IResource(resource) {
	
	return {
	
		getResources: resource.getResources,
		
		getResource: resource.getResource,
		
		addResource: resource.addResource,
		
		containResource: resource.containResource		
	}
}