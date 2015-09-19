/** 
 * [SIMINOV FRAMEWORK]
 * Copyright [2015] [Siminov Software Solution LLP|support@siminov.com]
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/


/**
	Exposes classes which deal with database.
	A Siminov Database Abstraction Layer is an application programming interface which unifies the communication between a computer application and database such as SQLite.
	Siminov Database Layer reduce the amount of work by providing a consistent API to the developer and hide the database specifics behind this interface as much as possible.
	
	@module Database
*/


/**
	Exposes methods to deal with database.
	It has methods to create, delete, and perform other common database management tasks.

	@module Database	
	@class Database	
	@constructor
*/
function Database() {


	
	/**
		It adds a record to any single table in a relational database.

	   	<pre>
	   	
		Example: Make Liquor Object
	
			var beer = new Liquor();
			beer.setLiquorType(Liquor.LIQUOR_TYPE_BEER);
			beer.setDescription(beer_description));
			beer.setHistory(beer_history));
			beer.setLink(beer_link));
			beer.setAlcholContent(beer_alchol_content));
		  
			try {
				beer.save();
			} catch(DatabaseException de) {
				//Log it.
			}

	    </pre>

		@method save	 
	   	@throws {SiminovException} If any error occurs while saving tuples in database.
	 */
	this.save = function() {

		var callback = arguments && arguments[0];

        var datas = SIDatasHelper.toSI(this);
        var json = SIJsonHelper.toJson(datas, true);

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_SAVE_HANDLER);

        adapter.addParameter(json);

		if(callback) {
			adapter.setCallback(saveCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
		
	        var data = Adapter.invoke(adapter);
			saveCallback(data);	
		}

		
		function saveCallback(data) {
		
	        if(data != undefined && data != null) {
	
	            var siminovDatas = SIJsonHelper.toSI(data);
	            var exceptions = SIDatasHelper.toModels(siminovDatas);
	
	            if(exceptions != undefined && exceptions != null && exceptions.length > 0) {
	                var exception = exceptions[0];
	                if(exception != undefined && exception != null) {
	                    
	                    if(callback) {
	                    	callback && callback.onFailure && callback.onFailure();
	                    } else {
							throw exception;	                    	
	                    }
	                } else {
	                	callback && callback.onSuccess && callback.onSuccess(data);
	                }
	            } else {
	            	callback && callback.onSuccess && callback.onSuccess(data);
	            }
	        } else {
	        	callback && callback.onSuccess && callback.onSuccess(data);
	        }
		}
	}

	this.saveAsync = function(callback) {
		this.save(callback?callback:new Callback());
	}
	

	/**
		It updates a record to any single table in a relational database.
	
		Example: Make Beer Object
		
			var beer = new Liquor();
			beer.setLiquorType(Liquor.LIQUOR_TYPE_BEER);
			beer.setDescription(beer_description));
			beer.setHistory(beer_history));
			beer.setLink(beer_link));
			beer.setAlcholContent(beer_alchol_content));
		 
			try {
				beer.update();
			} catch(DatabaseException de) {
				//Log it.
			}

		@method update
	   	@throws DatabaseException If any error occurs while saving tuples in database.
	 */
    this.update = function() {

		var callback = arguments && arguments[0];
	
        var datas = SIDatasHelper.toSI(this);
        var json = SIJsonHelper.toJson(datas, true);

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_UPDATE_HANDLER);

        adapter.addParameter(json);

		if(callback) {
			adapter.setCallback(updateCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
			var data = Adapter.invoke(adapter);
			updateCallback(data);
		}

	
		function updateCallback(data) {
		
	        if(data != undefined && data != null) {
	
	            var siminovDatas = SIJsonHelper.toSI(data);
	            var exceptions = SIDatasHelper.toModels(siminovDatas);
	
	            if(exceptions != undefined && exceptions != null && exceptions.length > 0) {
	                var exception = exceptions[0];
	                if(exception != undefined && exception != null) {
	                    
	                    if(callback) {
							callback && callback.onFailure && callback.onFailure(data);	                    
	                    } else {
		                    throw exception;
	                    }
	                } else {
	                	callback && callback.onSuccess && callback.onSuccess(data);
	                }
	            } else {
	            	callback && callback.onSuccess && callback.onSuccess(data);
	            }
	        } else {
	        	callback && callback.onSuccess && callback.onSuccess(data);
	        }
		}
    }


	this.updateAsync = function(callback) {
		this.update(callback?callback:new Callback());		
	}
	
	
	/**
		It finds out whether tuple exists in table or not.
		IF NOT EXISTS:
			adds a record to any single table in a relational database.
		ELSE:
			updates a record to any single table in a relational database.
	   	
		Example: Make Beer Object
		
			var beer = new Liquor();
			beer.setLiquorType(Liquor.LIQUOR_TYPE_BEER);
			beer.setDescription(beer_description));
			beer.setHistory(beer_history));
			beer.setLink(beer_link));
			beer.setAlcholContent(beer_alchol_content));
		  
			try {
				beer.saveOrUpdate();
			} catch(DatabaseException de) {
				//Log it.
			}

		@method saveOrUpdate						
	   	@throws {SiminovException} If any error occurs while saving tuples in database.
	 */
    this.saveOrUpdate = function() {
	
		var callback = arguments && arguments[0];
		var transaction = arguments && arguments[1];

        var datas = SIDatasHelper.toSI(this);
        var json = SIJsonHelper.toJson(datas, true);

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_SAVE_OR_UPDATE_HANDLER);

        adapter.addParameter(json);
		
		if(transaction) {
			adapter.setCallback(saveOrUpdateCallback);
			transaction.addRequest(adapter);		
		} else if(callback) {
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			adapter.setCallback(saveOrUpdateCallback);
	
			Adapter.invoke(adapter);
		} else {
			var data = Adapter.invoke(adapter);
			saveOrUpdateCallback(data);						
		}

		function saveOrUpdateCallback(data) {
		
	        if(data != undefined && data != null) {
	
	            var siminovDatas = SIJsonHelper.toSI(data);
	            var exceptions = SIDatasHelper.toModels(siminovDatas);
		
		       if(exceptions != undefined && exceptions != null && exceptions.length > 0) {
	                var exception = exceptions[0];
	                if(exception != undefined && exception != null) {
	                
	                	if(callback) {
							callback && callback.onFailure && callback.onFailure(data);
						} else {
		                    throw exception;
						}
	                } else {
	                	callback && callback.onSuccess && callback.onSuccess(data);
	                }
	            } else {
	            	callback && callback.onSuccess && callback.onSuccess(data);
	            }
	        } else {
	        	callback && callback.onSuccess && callback.onSuccess(data);
	        }
		}
    }


	this.saveOrUpdateAsync = function(callback, transaction) {
		this.saveOrUpdate(callback?callback:new Callback(), transaction);
    }



	/**
	 	Fetch tuples from table.

		Example:
	
		var liquors =  new Liquor().select()
						.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
						.and(Liquor.ALCHOL_CONTENT).equalTo("90%")
						.execute();
		
		@method select
	 	@return {ISelect} ISelect to provide extra information based on which tuples will be fetched from table.
	 	@throws {SiminovException} If any error occur while fetching tuples from table.
	 */
    this.select = function() {
    
    	if(arguments.length > 0) {
    	
		    var adapter = new Adapter();
		    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
		    adapter.setHandlerName(Constants.DATABASE_SELECT_MANUAL_HANDLER);
		
		    adapter.addParameter(className);
		    adapter.addParameter(arguments[0]);
		
		    var data = Adapter.invoke(adapter);
		    var datas = SIJsonHelper.toSI(data);
		    
		    var models = SIDatasHelper.toModels(datas);
			if(models != undefined && models != null && models.length > 0) {
				for(var i = 0;i < models.length;i++) {
					var model = models[i];
					
					if(model instanceof SiminovException) {
						throw model;
					}
				}
			}
		
		    return models;
    	}
    
        return new ISelect(new Select(this));
    }

	/**
		It deletes a record to any single table in a relational database.
	
		Example:
		
			var beer = new Liquor();
			beer.setLiquorType(Liquor.LIQUOR_TYPE_BEER);
			beer.setDescription(beer_description));
			beer.setHistory(beer_history));
			beer.setLink(beer_link));
			beer.setAlcholContent(beer_alchol_content));
		  
			try {
				beer.delete();
			} catch(DatabaseException de) {
				//Log it.
			}
					
			OR
					
			try {
				new Liquor().delete().execute();
			} catch(DatabaseException de) {
				//Log It.
			}
			
		@method delete	
	   	@throws {SiminovException} If any error occurs while saving tuples in database.
	 */
    this['delete'] = function() {
        return new IDelete(new Select(this));
    }

	
	/**
	 	Returns the average based on column name provided.
	 	
		Example:
			var average = 0;
			
			try {
				average = new Liquor().avg()
							.column(Liquor.COLUMN_NAME_WHICH_CONTAIN_NUMBRIC_VALUE)
							.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
							.execute();
		
			} catch(DatabaseException de) {
				//Log it.
			}
		
		@method avg
	 	@return {IAverage} IAverage to provide extra information based on which average will be calculated.
	 	@throws {SiminovException} If any error occur while finding average.
	 */
    this.avg = function() {
        return new IAverage(new Select(this));
    }



	/**
	 	Returns the count of rows based on information provided.
	 	
		Example:
			var count = 0;
			
			try {
				count = new Liquor().count().
							.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
							.execute();
				
			} catch(DatabaseException de) {
				//Log it.
			}
		
		@method count
	 	@return {ICount} ICount to provide extra information based on which count will be calculated.
	 	@throws {SiminovException} If any error occur while find count.
	 */
    this.count = function() {
        return new ICount(new Select(this));
    }



	/**
	 	Returns the minimum based on column name provided.
	 	
		Example:
			var maximum = 0;
			
			try {
				maximum = new Liquor().max()
							.column(Liquor.COLUMN_NAME_WHICH_CONTAIN_NUMBRIC_VALUE)
							.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
							.execute();
				
			} catch(DatabaseException de) {
				//Log it.
			}
	
		@method max
	 	@return {IMax} IMax to provide extra information based on which maximum will be calculated.
	 	@throws {SiminovException} If any error occur while finding minimum.
	 */
    this.max = function() {
        return new IMax(new Select(this));
    }



	/**
	 	Returns the minimum based on column name provided.
	 	
		Example:
			var minimum = 0;
			
			try {
				minimum = new Liquor().min()
							.column(Liquor.COLUMN_NAME_WHICH_CONTAIN_NUMBRIC_VALUE)
							.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
							.execute();
				
			} catch(DatabaseException de) {
				//Log it.
			}
	
		@method min
	 	@return {IMin} IMin to provide extra information based on which minimum will be calculated.
	 	@throws {SiminovException} If any error occur while finding minimum.
	 */
    this.min = function() {
        return new IMin(new Select(this));
    }



	/**
	 	Returns the sum based on column name provided.
	 	
		Example:
			var sum = 0;
			
			try {
				sum = new Liquor().sum()
							.column(Liquor.COLUMN_NAME_WHICH_CONTAIN_NUMBRIC_VALUE)
							.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
							.execute();
		
			} catch(DatabaseException de) {
				//Log it.
			}
			
		@method sum	
	 	@return {ISum} ISum to provide extra information based on which sum will be calculated.
	 	@throws {SiminovException} If any error occur while finding sum.
	 */
    this.sum = function() {
        return new ISum(new Select(this));
    }



	/**
	 	Returns the total based on column name provided.
	 	
		Example:
			var total = 0;
			
			try {
				total = new Liquor().total()
							.column(Liquor.COLUMN_NAME_WHICH_CONTAIN_NUMBRIC_VALUE)
							.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
							.execute();
				
			} catch(DatabaseException de) {
				//Log it.
			}
	    
	    @method total
	 	@return {ITotal} ITotal to provide extra information based on which total will be calculated.
	 	@throws {SiminovException} If any error occur while finding total.
	 */
    this.total = function() {
        return new ITotal(new Select(this));
    }



	/**
	 	Returns the group concat based on column name provided.
	 	
		Example:
			var groupConcat = 0;
			
			try {
				groupConcat = new Liquor().groupConcat()
								.column(Liquor.COLUMN_NAME_WHICH_CONTAIN_NUMBRIC_VALUE)
								.where(Liquor.LIQUOR_TYPE).equalTo("RUM")
								.execute();
								
			} catch(DatabaseException de) {
				//Log it.
			}
		
	 	@method groupConcat
	 	@return {IGroupConcat} IGroupConcat to provide extra information based on which group concat will be calculated.
	 	@throws SiminovException If any error occur while finding group concat.
	 */
    this.groupConcat = function() {
        return new IGroupConcat(new Select(this));
    }



	/**
	 	Returns the mapped table name for invoked class object.
	 
		Example:
			var tableName = null;
			try {
				tableName = new Liquor().getTableName();
			} catch(DatabaseException de) {
				//Log it.
			}
	
		@method getTableName
	 	@return {String} Mapped Table name.
	 	@throws {SiminovException} If no mapped table found for invoked class object.
	 */
    this.getTableName = function() {

		var callback = arguments && arguments[0];

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_GET_TABLE_NAME_HANDLER);

        adapter.addParameter(this.getFunctionName());

		
		if(callback) {
			adapter.setCallback(getTableNameCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);			
		} else {
	        var data = Adapter.invoke(adapter);
			return getTableNameCallback(data);	
		}


		function getTableNameCallback(data) {
		
	        var hybridData = SIJsonHelper.toSI(data);
	        if(hybridData != undefined) {
	        
	            var datas = hybridData.getHybridSiminovDatas();
	            if(datas != undefined) {
	            
	                for(var i = 0;i < datas.length;i++) {
	                    if(datas[i] != undefined) {
	                    
	                    	var type = datas[i].getDataType();
	                    	
	                    	if(type != undefined && type != null) {
	                    		var exception = SIJsonHelper.toModel(datas[i]);
	                    		if(exception != undefined && exception != null) {
	                    			
	                    			if(callback) {
	                    				callback && callback.onFailure && callback.onFailure();
	                    				break;
	                    			} else {
			                    		throw exception;	
	                    			}
	                    		}
	                    	} else {
	                    	
	                    		if(callback) {
									callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());	                    		
	                    		} else {
			                        return datas[i].getDataValue();
	                    		}
	                    	}
	                    }
	                }
	            }
	        } else {
	        
        		if(callback) {
					callback && callback.onSuccess && callback.onSuccess();	                    		
        		} else {
                    return;
        		}
	        }
		}
    }


	this.getTableNameAsync = function(callback) {
		this.getTableName(callback?callback:new Callback());
	}


	/**
	 	Returns all column names of mapped table.
	 	
		Example:
			var columnNames = null;
			try {
				columnNames = new Liquor().getColumnNames();
			} catch(DatabaseException de) {
				//Log it.
			}
	 		
		@method getColumnNames
	 	@return {Array} All column names of mapped table.
	 	@throws {SiminovException} If no mapped table found for invoked class object.
	 */
    this.getColumnNames = function() {

		var callback = arguments && arguments[0];

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_GET_COLUMN_NAMES_HANDLER);

        adapter.addParameter(this.getFunctionName());

		
		if(callback) {
			adapter.setCallback(getColumnNamesCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
	        var data = Adapter.invoke(adapter);
	        return getColumnNamesCallback(data);
		}


		function getColumnNamesCallback(data) {
		
	        var hybridData = SIJsonHelper.toSI(data);
	        var columnNames = [];
	
	        if(hybridData != undefined) {
	            var datas = hybridData.getHybridSiminovDatas();
	            
	            if(datas != undefined) {
	                for(var i = 0;i < datas.length;i++) {
	                
	                    if(datas[i] != undefined) {
	                    	var type = datas[i].getDataType();
	                    	
	                    	if(type != undefined && type != null) {
	                    		var exception = SIJsonHelper.toModel(datas[i]);
	                    		if(exception != undefined && exception != null) {
	                    		
	                    			if(callback) {
	                    				callback && callback.onFailure && callback.onFailure();
	                    				return;
	                    			} else {
			                    		throw exception;	
	                    			}
	                    		}
	                    	} else {
	                    		columnNames[i] = datas[i].getDataValue();
	                    	}
	                    }
	                }
	            }
	        }
	        
	        if(callback) {
	        	callback && callback.onSuccess && callback.onSuccess(columnNames);
	        } else {
	        	return columnNames;
	        }
		}
    }


	this.getColumnNamesAsync = function(callback) {
		this.getColumnNames(callback?callback:new Callback());
	}



	/**
	 	Returns all columns with there data types for invoked class object.
	
		Example:
			var columnTypes = null;
			try {
				columnTypes = new Liquor().getColumnTypes();
			} catch(DatabaseException de) {
				//Log it.
			}	
	
		@method getColumnTypes
	 	@return {Dictionary} All columns with there data types.
	 	@throws {SiminovException} If no mapped table found for invoked class object.
	 */
    this.getColumnTypes = function() {

		var callback = arguments && arguments[0];

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_GET_COLUMN_TYPES_HANDLER);

        adapter.addParameter(this.getFunctionName());

		
		if(callback) {
			adapter.setCallback(getColumnTypesCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
	        var data = Adapter.invoke(adapter);
			return getColumnTypesCallback(data);	
		}


		function getColumnTypesCallback(data) {
		
	        var hybridData = SIJsonHelper.toSI(data);
	        var columnTypes = new Dictionary();
	
	        if(hybridData != undefined) {
	        
	            var datas = hybridData.getHybridSiminovDatas();
	            if(datas != undefined) {
	
	                for(var i = 0;i < datas.length;i++) {
						var type = datas[i].getDataType();
	                    	
	                	if(type != undefined && type != null) {
	                		var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                		
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure();
	                				return;
	                			} else {
		                    		throw exception;	
	                			}
	                		}
	                	} else {
		                    var values = datas[i].getValues();
		                    if(values != undefined) {
		
		                        for(var j = 0;j < values.length;j++) {
		                            var value = values[j];
		
		                            columnTypes.add(value.getType(), value.getValue());
		                        }
		                    }
	                	}
	                }
	            }
	        }
	        
	        if(callback) {
	        	callback && callback.onSuccess && callback.onSuccess(columnTypes);
	        } else {
				return columnTypes;	        
	        }
		}
    }


	this.getColumnTypesAsync = function(callback) {
		this.getColumnTypes(callback?callback:new Callback());
	}


	/**
	 	Returns all primary keys of mapped table for invoked class object.
	 	
		Example:
			var primaryKeys = null;
			try {
				primaryKeys = new Liquor().getPrimeryKeys();
			} catch(DatabaseException de) {
				//Log it.
			}
	
		@method getPrimaryKeys
	 	@return {Array} All primary keys.
	 	@throws {SiminovException} If not mapped table found for invoked class object.
	 */
    this.getPrimaryKeys = function() {

		var callback = arguments && arguments[0];
	
        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_GET_PRIMARY_KEYS_HANDLER);

        adapter.addParameter(this.getFunctionName());

		
		if(callback) {
			adapter.setCallback(getPrimaryKeysCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
	        var data = Adapter.invoke(adapter);
	        return getPrimaryKeysCallback(data);
		}


		function getPrimaryKeysCallback(data) {
		
	        var hybridData = SIJsonHelper.toSI(data);
	        var primaryKeys = [];
	
	        if(hybridData != undefined) {
	            var datas = hybridData.getHybridSiminovDatas();
	            if(datas != undefined) {
	
	                for(var i = 0;i < datas.length;i++) {
	                	var type = datas[i].getDataType();
	                    	
	                	if(type != undefined && type != null) {
	                		var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                		
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure();
	                				return;
	                			} else {
		                    		throw exception;	
	                			} 
	                		}
	                	} else {
	                        primaryKeys[i] = datas[i].getDataValue();
	                	}
	                }
	            }
	        }
	        
	        if(callback) {
	        	callback && callback.onSuccess && callback.onSuccess(primaryKeys);
	        } else {
	        	return primaryKeys;
	        }
		}
    }



	this.getPrimaryKeysAsync = function(callback) {
		this.getPrimaryKeys(callback?callback:new Callback());		
	}
	

	/**
	 	Returns all mandatory fields which are associated with mapped table for invoked class object.
	 
		Example:
			var mandatoryFields = null;
			try {
				mandatoryFields = new Liquor().getMandatoryFields();
			} catch(DatabaseException de) {
				//Log it.
			}

		@method getMandatoryFields
	 	@return {Array} All mandatory fields for mapped table.
	 	@throws SiminovException If no mapped table found for invoked class object.
	 */
    this.getMandatoryFields = function() {

		var callback = arguments && arguments[0];

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_GET_MANDATORY_FIELDS_HANDLER);

        adapter.addParameter(this.getFunctionName());

	
		if(callback) {
			adapter.setCallback(getMandatoryFieldsCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
	        var data = Adapter.invoke(adapter);
			return getMandatoryFieldsCallback(data);	
		}
	
	
		function getMandatoryFieldsCallback(data) {
		
	        var hybridData = SIJsonHelper.toSI(data);
	        var mandatoryFields = [];
	
	        if(hybridData != undefined) {
	            var datas = hybridData.getHybridSiminovDatas();
	            
	            if(datas != undefined) {
	
	                for(var i = 0;i < datas.length;i++) {
	                	var type = datas[i].getDataType();
	                    	
	                	if(type != undefined && type != null) {
	                		var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                		
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure();
	                				return;
	                			} else {
		                    		throw exception;	
	                			}
	                		}
	                	} else {
		                    mandatoryFields[i] = datas[i].getDataValue();
	                	}
	                }
	            }
	        }
	        
	        if(callback) {
	        	callback && callback.onSuccess && callback.onSuccess(mandatoryFields);
	        } else {
	        	return mandatoryFields;
	        }
		}
    }


	this.getMandatoryFieldsAsync = function(callback) {
		this.getMandatoryFields(callback?callback:new Callback());
	}

	/**
	 	Returns all unique fields which are associated with mapped table for invoked class object.
	 
		Example:
			 			
			var uniqueFields = null;
			try {
				uniqueFields = new Liquor().getUniqueFields();
			} catch(DatabaseException de) {
				//Log it.
			}

		@method getUniqueFields	 		
	 	@return {Array} All unique fields for mapped table.
	 	@throws {SiminovException} If no mapped table found for invoked class object.
	 */
    this.getUniqueFields = function() {

		var callback = arguments && arguments[0];

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_GET_UNIQUE_FIELDS_HANDLER);

        adapter.addParameter(this.getFunctionName());

	
		if(callback) {
			adapter.setCallback(getUniqueFieldsCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
	        var data = Adapter.invoke(adapter);
	        return getUniqueFieldsCallback(data);
		}


		function getUniqueFieldsCallback(data) {
		
	        var hybridData = SIJsonHelper.toSI(data);
	        var uniqueFields = [];
	
	        if(hybridData != undefined) {
	            var datas = hybridData.getHybridSiminovDatas();
	            if(datas != undefined) {
	
	                for(var i = 0;i < datas.length;i++) {
	                	var type = datas[i].getDataType();
	                    	
	                	if(type != undefined && type != null) {
	                		var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                    		throw exception;	
	                		}
	                	} else {
		                    uniqueFields[i] = datas[i].getDataValue();
	                	}
	                }
	            }
	        }
	        
	        if(callback) {
	        	callback && callback.onSuccess && callback.onSuccess(uniqueFields);
	        } else {
	        	return uniqueFields;
	        }
		}
    }


	this.getUniqueFieldsAsync = function(callback) {
		this.getUniqueFields(callback?callback:new Callback());
	}



	/**
	 	Returns all foreign keys of mapped table for invoked class object.
	 
		Example:
			 			
			var foreignKeys = null;
			try {
				foreignKeys = new Liquor().getForeignKeys();
			} catch(DatabaseException de) {
				//Log it.
			}
	
		@method getForeignKeys
	 	@return {Array} All foreign keys of mapped table.
	 	@throws {SiminovException} If no mapped table found for invoked class object.
	 */
    this.getForeignKeys = function() {

		var callback = arguments && arguments[0]; 

        var adapter = new Adapter();
        adapter.setAdapterName(Constants.DATABASE_ADAPTER);
        adapter.setHandlerName(Constants.DATABASE_GET_FOREIGN_KEYS_HANDLER);

        adapter.addParameter(this.getFunctionName());

	
		if(callback) {
			adapter.setCallback(getForeignKeysCallback);
			adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
			
			Adapter.invoke(adapter);
		} else {
	        var data = Adapter.invoke(adapter);
			return getForeignKeysCallback(data);		
		}
		

		function getForeignKeysCallback(data) {
		
	        var hybridData = SIJsonHelper.toSI(data);
	        var foreignKeys = [];
	
	        if(hybridData != undefined) {
	            var datas = hybridData.getHybridSiminovDatas();
	            if(datas != undefined) {
	
	                for(var i = 0;i < datas.length;i++) {
	                	var type = datas[i].getDataType();
	                    	
	                	if(type != undefined && type != null) {
	                		var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                		
	                			if(callback) {
									callback && callback.onFailure && callback.onFailure();    
									return;         			
	                			} else {
		                    		throw exception;	
	                			}
	                		}
	                	} else {
		                    foreignKeys[i] = datas[i].getDataValue();
	                	}
	                }
	            }
	        }
	        
	        if(callback) {
	        	callback && callback.onSuccess && callback.onSuccess(foreignKeys);
	        } else {
	        	return foreignKeys;
	        }
		}
    }



	this.getForeignKeysAsync = function(callback) {
		this.getForeignKeys(callback?callback:new Callback());
	}


	/**
	 	Returns database descriptor object based on the POJO class called.

		Example:
		
			try {
				DatabaseDescriptor databaseDescriptor = new Liquor().getDatabaseDescriptor();
			} catch(DatabaseException databaseException) {
				//Log It.
			}
	
		@method getDatabaseDescriptor
	 	@return {DatabaseDescriptor} Database Descriptor Object.
	 	@throws {SiminovException} If any error occur while getting database descriptor object.
	 */
    this.getDatabaseDescriptor = function() {

		var callback = arguments && arguments[0];
        var resourceManager = ResourceManager.getInstance();
        
        if(callback) {
			resourceManager.getDatabaseDescriptorBasedOnClassNameAsync(this.getFunctionName(), callback);
        } else {
	        return resourceManager.getDatabaseDescriptorBasedOnClassName(this.getFunctionName());
        }
    }


	this.getDatabaseDescriptorAsync = function(callback) {
		this.getDatabaseDescriptor(callback?callback:new Callback());
	}
	

	/**
	 	Returns the actual entity descriptor object mapped for invoked class object.
	 
		Example:
			EntityDescriptor entityDescriptor = null;
			try {
				entityDescriptor = new Liquor().getEntityDescriptor();
			} catch(DatabaseException de) {
				//Log it.
			}
	
		@method getEntityDescriptor
	 	@return {EntityDescriptor} Entity Descriptor Object
	 	@throws {SiminovException} If entity object not mapped for invoked class object.
	 */
    this.getEntityDescriptor = function() {

		var callback = arguments && arguments[0];
        var resourceManager = ResourceManager.getInstance();
        
        if(callback) {
        	resourceManager.getEntityDescriptorBasedOnClassNameAsync(this.getFunctionName(), callback);
        } else {
	        return resourceManager.getEntityDescriptorBasedOnClassName(this.getFunctionName());
        }
    }


	this.getEntityDescriptorAsync = function(callback) {
		this.getEntityDescriptor(callback?callback:new Callback());
	}

}



Database.select = function(className, distinct, whereClause, columnNames, groupBy, having, orderBy, whichOrderBy, limit) {

	var callback = arguments && arguments[9];
	
	Log.debug("Database", "select", "Callback: " + callback + ", limit: " + limit);
    var adapter = new Adapter();
    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_SELECT_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(distinct);
    adapter.addParameter(whereClause);
    adapter.addParameter(columnNames);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);
    adapter.addParameter(orderBy);
    adapter.addParameter(whichOrderBy);
    adapter.addParameter(limit);

    
    if(callback) {
    	adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
    	adapter.setCallback(selectCallback);
    	
    	Adapter.invoke(adapter);
    } else {
	    var data = Adapter.invoke(adapter);
    	return selectCallback(data);	
    }
    
    function selectCallback(data) {
    	Log.debug("Database", "select", "select callback success: " + data);
    	
	    var datas = SIJsonHelper.toSI(data);
	    var models = SIDatasHelper.toModels(datas);
	    
		if(models != undefined && models != null && models.length > 0) {
			for(var i = 0;i < models.length;i++) {
				var model = models[i];
				
				if(model instanceof SiminovException) {
					
					if(callback) {
						callback && callback.onFailure && callback.onFailure();
						break;											
					} else {
						throw model;
					}
				}
			}
		}
		
		Log.debug("Database", "select", "Callback: " + callback + "model: " + models + "callback: " + callback);
		if(callback) {
			Log.debug("Database", "select", "Callback Models: " + models);
			callback && callback.onSuccess && callback.onSuccess(models);		
		} else {
		    return models;
		}
    }
}



Database.count = function(className, column, distinct, whereClause, groupBy, having) {

	var callback = arguments && arguments[6];

    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_COUNT_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(column);
    adapter.addParameter(distinct);
    adapter.addParameter(whereClause);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);


	if(callback) {
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		adapter.setCallback(countCallback);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return countCallback(data);			
	}


	function countCallback(data) {
		
	    var hybridData = SIJsonHelper.toSI(data);
	    if(hybridData != undefined) {
	    
	        var datas = hybridData.getHybridSiminovDatas();
	        if(datas != undefined) {
	        
	            for(var i = 0;i < datas.length;i++) {
	            
	                if(datas[i] != undefined) {
	                	var type = datas[i].getDataType();
	                	
	                	if(type != undefined && type != null) {
	                	
							var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                			
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure(data);
	                			} else {
		                    		throw exception;	
	                			}
	                		} else {
	                		
		                		if(callback) {
	                				callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
	                				break;
	                			} else {
				                    return datas[i].getDataValue();
	                			}
	                		}
	                	} else {
	                	
	                		if(callback) {
                				callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
                				break;
                			} else {
			                    return datas[i].getDataValue();
                			}
	                	}
	                }
	            }
	        } else {
	        	
	        	if(callback) {
	        		callback && callback.onSuccess && callback.onSuccess(0);
	        	} else {
	        		return 0;
	        	}
	        }
	    }
	}
}


Database.avg = function(className, column, whereClause, groupBy, having) {

	var callback = arguments && arguments[5];

    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_AVERAGE_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(column);
    adapter.addParameter(whereClause);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);


	if(callback) {
		adapter.setCallback(avgCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return avgCallback(data);	
	}


	function avgCallback(data) {
	
	    var hybridData = SIJsonHelper.toSI(data);
	    if(hybridData != undefined) {
	    
	        var datas = hybridData.getHybridSiminovDatas();
	        if(datas != undefined) {
	        
	            for(var i = 0;i < datas.length;i++) {
	            
	                if(datas[i] != undefined) {
	                	var type = datas[i].getDataType();
	                	
	                	if(type != undefined && type != null) {
	                	
							var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                		
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure(data);
	                				break;
	                			} else {
		                    		throw exception;	
	                			}
	                		}                	
	                	} else {
	                	
	                		if(callback) {
								callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
								break;	                		
	                		} else {
			                    return datas[i].getDataValue();
	                		}
	                	}
	                }
	            }
	        } else {
	        
	        	if(callback) {
	        		callback && callback.onSuccess && callback.onSuccess(0);
	        	} else {
	        		return 0;
	        	}
	        }
	    }
	}
}


Database.min = function(className, column, whereClause, groupBy, having) {

	var callback = arguments && arguments[5];

    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_MIN_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(column);
    adapter.addParameter(whereClause);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);

	
	if(callback) {
		adapter.setCallback(minCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return minCallback(data);		
	}
	
	
	function minCallback(data) {
	
	    var hybridData = SIJsonHelper.toSI(data);
	    if(hybridData != undefined) {
	    
	        var datas = hybridData.getHybridSiminovDatas();
	        if(datas != undefined) {
	        
	            for(var i = 0;i < datas.length;i++) {
	            
	                if(datas[i] != undefined) {
	                    var type = datas[i].getDataType();
	                	
	                	if(type != undefined && type != null) {
							var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                			
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure();
	                				break;
	                			} else {
		                    		throw exception;	
	                			}
	                		}                	
	                	} else {
	                		
	                		if(callback) {
	                			callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
	                			break;
	                		} else {
			                    return datas[i].getDataValue();
	                		}
	                	}
	                }
	            }
	        } else {
	        
        		if(callback) {
        			callback && callback.onSuccess && callback.onSuccess(0);
        		} else {
                    return 0;
        		}
	        }
	    }
	}
}


Database.max = function(className, column, whereClause, groupBy, having) {

	var callback = arguments && arguments[5];

    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_MAX_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(column);
    adapter.addParameter(whereClause);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);


	if(callback) {
		adapter.setCallback(maxCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
	
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return maxCallback(data);
	}


	function maxCallback(data) {
	
	    var hybridData = SIJsonHelper.toSI(data);
	    if(hybridData != undefined) {
	    
	        var datas = hybridData.getHybridSiminovDatas();
	        if(datas != undefined) {
	        
	            for(var i = 0;i < datas.length;i++) {
	            
	                if(datas[i] != undefined) {
	                    var type = datas[i].getDataType();
	                	
	                	if(type != undefined && type != null) {
							var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                			
	                			if(callback) {
									callback && callback.onFailure && callback.onFailure();      
									break;          			
	                			} else {
		                    		throw exception;	
	                			}
	                		}                	
	                	} else {
	                	
	                		if(callback) {
	                			callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
	                			break;
	                		} else {
			                    return datas[i].getDataValue();
	                		}
	                	}
	                }
	            }
	        } else {
	        
        		if(callback) {
        			callback && callback.onSuccess && callback.onSuccess(0);
        			break;
        		} else {
                    return 0;
        		}
	        }
	    }
	}
}


Database.sum = function(className, column, whereClause, groupBy, having) {

	var callback = arguments && arguments[5];

    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_SUM_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(column);
    adapter.addParameter(whereClause);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);


	if(callback) {
		adapter.setCallback(sumCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
	    return sumCallback(data);
	}


	function sumCallback(data) {
	
	    var hybridData = SIJsonHelper.toSI(data);
	    if(hybridData != undefined) {
	    
	        var datas = hybridData.getHybridSiminovDatas();
	        if(datas != undefined) {
	        
	            for(var i = 0;i < datas.length;i++) {
	            
	                if(datas[i] != undefined) {
	                    var type = datas[i].getDataType();
	                	
	                	if(type != undefined && type != null) {
							var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                			
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure();
	                				break;
	                			} else {
		                    		throw exception;	
	                			}
	                		}                	
	                	} else {
	                		
	                		if(callback) {
	                			callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
	                			break;
	                		} else {
			                    return datas[i].getDataValue();
	                		}
	                	}
	                }
	            }
	        } else {
	        	
	        	if(callback) {
	        		callback && callback.onSuccess && callback.onSuccess(0);
	        	} else {
	        		return 0;
	        	}
	        }
	    }
	}
}


Database.total = function(className, column, whereClause, groupBy, having) {

	var callback = arguments && arguments[5];
	
    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_TOTAL_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(column);
    adapter.addParameter(whereClause);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);


	if(callback) {
		adapter.setCallback(totalCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return totalCallback(data);
	}


	function totalCallback(data) {
		
	    var hybridData = SIJsonHelper.toSI(data);
	    if(hybridData != undefined) {
	        var datas = hybridData.getHybridSiminovDatas();
	        if(datas != undefined) {
	            for(var i = 0;i < datas.length;i++) {
	                if(datas[i] != undefined) {
	                    var type = datas[i].getDataType();
	                	
	                	if(type != undefined && type != null) {
							var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                		
	                			if(callback) {
	                				callback && callback.onFailure && callback.onFailure();
	                				break;
	                			} else {
		                    		throw exception;	
	                			}
	                		}                	
	                	} else {
	                	
	                		if(callback) {
	                			callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
	                			break;
	                		} else {
			                    return datas[i].getDataValue();
	                		}
	                	}
	                }
	            }
	        } else {
	        
        		if(callback) {
        			callback && callback.onSuccess && callback.onSuccess(0);
        			break;
        		} else {
                    return 0;
        		}
	        }
	    }
	}
}


Database.groupConcat = function(className, column, delimiter, whereClause, groupBy, having) {

	var callback = arguments && arguments[6];

    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_GROUP_CONCAT_HANDLER);

    adapter.addParameter(className);
    adapter.addParameter(column);
    adapter.addParameter(delimiter);
    adapter.addParameter(whereClause);
    adapter.addParameter(groupBy);
    adapter.addParameter(having);

	
	if(callback) {
		adapter.setCallback(groupConcatCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return groupConcatCallback(data);
	}


	function groupConcatCallback(data) {
			
	    var hybridData = SIJsonHelper.toSI(data);
	    if(hybridData != undefined) {
	    
	        var datas = hybridData.getHybridSiminovDatas();
	        if(datas != undefined) {
	        
	            for(var i = 0;i < datas.length;i++) {
	                if(datas[i] != undefined) {
	                    var type = datas[i].getDataType();
	                	
	                	if(type != undefined && type != null) {
							var exception = SIJsonHelper.toModel(datas[i]);
	                		if(exception != undefined && exception != null) {
	                		
	                			if(callback) {
									callback && callback.onFailure && callback.onFailure();
									break;	                			
	                			} else {
		                    		throw exception;	
	                			}
	                		}                	
	                	} else {
	                	
	                		if(callback) {
	                			callback && callback.onSuccess && callback.onSuccess(datas[i].getDataValue());
	                			break;
	                		} else {
			                    return datas[i].getDataValue();
	                		}
	                	}
	                }
	            }
	        } else {
	        
        		if(callback) {
        			callback && callback.onSuccess && callback.onSuccess("");
        		} else {
                    return "";
        		}
	        }
	    }
	}
}



Database['delete'] = function(className, whereClause, data) {

	var callback = arguments && arguments[3];

    var adapter = new Adapter();

    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_DELETE_HANDLER);


    adapter.addParameter(className);
    adapter.addParameter(whereClause);
    adapter.addParameter(data);

	
	if(callback) {
		adapter.setCallback(deleteCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return deleteCallback(data);
	}


	function deleteCallback(data) {
	
	    if(data != undefined && data != null) {
	
	        var siminovDatas = SIJsonHelper.toSI(data);
	        var exceptions = SIDatasHelper.toModels(siminovDatas);
	
	        if(exceptions != undefined && exceptions != null && exceptions.length > 0) {
	            var exception = exceptions[0];
	            if(exception != undefined && exception != null) {
	            
	            	if(callback) {
						callback && callback.onFailure && callback.onFailure();	   
						break;         	
	            	} else {
		                throw exception;
	            	}
	            }
	        } else {
	        
            	if(callback) {
					callback && callback.onSuccess && callback.onSuccess();	 
            	} else {
	                return;
            	}
	        }
	    } else {
	    
        	if(callback) {
				callback && callback.onSuccess && callback.onSuccess();	            	
        	} else {
                return;
        	}
	    }
	}
}



Database.beginTransaction = function(databaseDescriptor) {

	var callback = arguments && arguments[1];
	var transaction = new Transaction();

    var adapter = new Adapter();
    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_BEGIN_TRANSACTION_HANDLER);

    adapter.addParameter(databaseDescriptor.getDatabaseName());


	if(callback) {

		callback.onExecute && callback.onExecute(transaction);
		
		var requests = transaction.getRequests();
		
		var adapters = new StringBuilder();
		for(var i = 0;i < requests.length;i++) {
			
			var adapterDatas = SIDatasHelper.toSI(requests[i]);
	        var adapterJson = SIJsonHelper.toJson(adapterDatas, true);
	        
	        adapterJson = adapterJson.replaceAll("{'-type':'parameters','#text':'", "{'-type':'parameters','#text':\"");
	        adapterJson = adapterJson.replaceAll("}]}]}}'},{'-type':'callback'", "}]}]}}\"},{'-type':'callback'");
	        
			adapters.append(adapterJson);
		}
		adapter.addParameter(adapters);
		
	    adapter.setHandlerName(Constants.DATABASE_BEGIN_TRANSACTION_ASYNC_HANDLER);
		    
		adapter.setCallback(beginTransactionCallback);
		adapter.setAdapterMode(Adapter.REQUEST_ASYNC_MODE);
		
		Adapter.invoke(adapter);
	} else {
	    var data = Adapter.invoke(adapter);
		return beginTransactionCallback(data);	
	}

	
	function beginTransactionCallback(data) {
	
	    if(data != undefined && data != null) {
	
	        var siminovDatas = SIJsonHelper.toSI(data);
	        var exceptions = SIDatasHelper.toModels(siminovDatas);
	
	        if(exceptions != undefined && exceptions != null && exceptions.length > 0) {
	            var exception = exceptions[0];
	            if(exception != undefined && exception != null) {
	            
	            	if(callback) {
	            		callback && callback.onFailure && callback.onFailure();
	            		return;
	            	} else {
		                throw exception;
	            	}
	            }
	        }
	    }
	    
	    
	    if(!callback) {
	    	return;
	    }
	    
	    
	    var requests = transaction.getRequests();
	    for(var i = 0;i < requests.length;i++) {
	    	
	    	var request = requests[i];
	    	var requestCallback = request.getCallback();
	    	requestCallback && requestCallback();
	    	
	    	transaction.removeRequest(request);
	    }
	    
    	callback && callback.onSuccess && callback.onSuccess();
	}
}


Database.beginTransactionAsync = function(databaseDescriptor, callback) {
	Database.beginTransaction(databaseDescriptor, callback);
}


Database.commitTransaction = function(databaseDescriptor) {

    var adapter = new Adapter();
    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_COMMIT_TRANSACTION_HANDLER);

    adapter.addParameter(databaseDescriptor.getDatabaseName());

    var data = Adapter.invoke(adapter);
    if(data != undefined && data != null) {

        var siminovDatas = SIJsonHelper.toSI(data);
        var exceptions = SIDatasHelper.toModels(siminovDatas);

        if(exceptions != undefined && exceptions != null && exceptions.length > 0) {
            var exception = exceptions[0];
            if(exception != undefined && exception != null) {
                throw exception;
            }
        }
    }
}


Database.endTransaction = function(databaseDescriptor) {

    var adapter = new Adapter();
    adapter.setAdapterName(Constants.DATABASE_ADAPTER);
    adapter.setHandlerName(Constants.DATABASE_END_TRANSACTION_HANDLER);

    adapter.addParameter(databaseDescriptor.getDatabaseName());

    var data = Adapter.invoke(adapter);
    if(data != undefined && data != null) {

        var siminovDatas = SIJsonHelper.toSI(data);
        var exceptions = SIDatasHelper.toModels(siminovDatas);

        if(exceptions != undefined && exceptions != null && exceptions.length > 0) {
            var exception = exceptions[0];
            if(exception != undefined && exception != null) {
                throw exception;
            }
        }
    }

}

