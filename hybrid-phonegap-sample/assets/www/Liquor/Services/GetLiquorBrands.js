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

var Log = require('../../Siminov/Log/Log');
var Function = require('../../Siminov/Function/Function');
var Service = require('../../Siminov/Service/Service');

var Liquor = require('../Models/Liquor');
var LiquorBrand = require('../Models/LiquorBrand');
var LiquorBrandsReader = require('../ReaderWritter/LiquorBrandsReader');

module.exports = GetLiquorBrands;


function GetLiquorBrands() {
    
    this.setService(GetLiquorBrands.SERVICE_NAME);
    this.setRequest(GetLiquorBrands.REQUEST_NAME);
    
    this.onStart = function() {
        
    }
    
    this.onQueue = function() {
        
    }
    
    this.onPause = function() {
        
    }
    
    this.onResume = function() {
        
    }
    
    this.onFinish = function() {
        
    }
    
    this.onRequestInvoke = function(connectionRequest) {
        
    }
    
    this.onRequestFinish = function(connectionResponse) {
        
        if(connectionResponse.getResponse() == null) {
            return;
        }
        
        var liquorType = this.getResource(GetLiquorBrands.LIQUOR_NAME);
        
        
        var liquor;
        for(var i = 0;i < liquors.length;i++) {
            
            if(liquors[i].getLiquorType() === liquorType) {
                liquor = liquors[i];
            }
        }
        
        liquor.removeLiquorBrands();
        
        
        var liquorBrandsReader = new LiquorBrandsReader();
        liquorBrandsReader.parse(connectionResponse.getResponse());
        
        var liquorBrands = liquorBrandsReader.getLiquorBrands();
        var callbackCount = 0;
        
        var callback = new Callback();
        callback.onExecute = function(transaction) {
            
            for(var i = 0;i < liquorBrands.length;i++) {
                var liquorBrand = liquorBrands[i];
                liquorBrand.setLiquor(liquor);
                
                liquorBrand.saveOrUpdateAsync(saveCallback, transaction);
                
                var saveCallback = new Callback();
                saveCallback.onSuccess = function() {

                }
            }
            
            
            liquor.updateAsync(updateCallback, transaction);
            
            var updateCallback = new Callback();
            updateCallback.onSuccess = function() {

            }
            
            
            var selectCallback = new Callback();
            selectCallback.onSuccess = function(savedLiquors) {
                Log.debug("Home", "populateHome", "Saved Liquors: " + savedLiquors);
            }
            
            var columnNames = new Array();
            columnNames.push('BRAND_NAME');
            columnNames.push('DESCRIPTION');
            
            new LiquorBrand().select().columns(columnNames).ascendingOrderBy(columnNames).groupBy(columnNames).executeAsync(selectCallback, transaction);
            
            
            var countCallback = new Callback();
            countCallback.onSuccess = function(liquorBrandCount) {
                Log.debug("Home", "populateHome", "Liquor Brand Count: " + liquorBrandCount);
            }
            
            
            new LiquorBrand().count().executeAsync(countCallback, transaction);
            
            
            var avgCallback = new Callback();
            avgCallback.onSuccess = function(liquorBrandAvg) {
                Log.debug("Home", "populateHome", "Liquor Brand Avg: " + liquorBrandAvg);
            }
            
            
            new LiquorBrand().avg().column('BRAND_NAME').executeAsync(avgCallback, transaction);
            
            
            var minCallback = new Callback();
            minCallback.onSuccess = function(liquorBrandMin) {
                Log.debug("Home", "populateHome", "Liquor Brand Min: " + liquorBrandMin);
            }
            
            
            new LiquorBrand().min().column('BRAND_NAME').executeAsync(minCallback, transaction);
            
            var maxCallback = new Callback();
            maxCallback.onSuccess = function(liquorBrandMax) {
                Log.debug("Home", "populateHome", "Liquor Brand Max: " + liquorBrandMax);
            }
            
            
            new LiquorBrand().max().column('BRAND_NAME').executeAsync(maxCallback, transaction);
            
            
            var sumCallback = new Callback();
            sumCallback.onSuccess = function(liquorBrandSum) {
                Log.debug("Home", "populateHome", "Liquor Brand Sum: " + liquorBrandSum);
            }
            
            
            new LiquorBrand().sum().column('BRAND_NAME').executeAsync(sumCallback, transaction);
            
            
            var totalCallback = new Callback();
            totalCallback.onSuccess = function(liquorBrandTotal) {
                Log.debug("Home", "populateHome", "Liquor Brand Total: " + liquorBrandTotal);
            }
            
            
            new LiquorBrand().total().column('BRAND_NAME').executeAsync(totalCallback, transaction);
            
            
            var groupConcatCallback = new Callback();
            groupConcatCallback.onSuccess = function(liquorBrandGroupConcat) {
                Log.debug("Home", "populateHome", "Liquor Brand Group Concat: " + liquorBrandGroupConcat);
            }
            
            
            new LiquorBrand().groupConcat().column('BRAND_NAME').executeAsync(groupConcatCallback, transaction);
            
            
            var deleteCallback = new Callback();
            deleteCallback.onSuccess = function(liquorBrandDelete) {
                Log.debug("Home", "populateHome", "Liquor Brand Delete: " + liquorBrandDelete);
            }
            
            
            //new LiquorBrand().delete().executeAsync(deleteCallback, transaction);
            
            
            var getTableNameCallback = new Callback();
            getTableNameCallback.onSuccess = function(liquorBrandGetTableName) {
                Log.debug("Home", "populateHome", "Liquor Brand Get Table Name: " + liquorBrandGetTableName);
            }
            
            
            new LiquorBrand().getTableNameAsync(getTableNameCallback, transaction);
            
            
            var getColumnNamesCallback = new Callback();
            getColumnNamesCallback.onSuccess = function(liquorBrandGetColumnNames) {
                Log.debug("Home", "populateHome", "Liquor Brand Get Column Names: " + liquorBrandGetColumnNames);
            }
            
            
            new LiquorBrand().getColumnNamesAsync(getColumnNamesCallback, transaction);
            
            
            var getColumnTypesCallback = new Callback();
            getColumnTypesCallback.onSuccess = function(liquorBrandGetColumnTypes) {
                Log.debug("Home", "populateHome", "Liquor Brand Get Column Types: " + liquorBrandGetColumnTypes);
            }
            
            
            new LiquorBrand().getColumnTypesAsync(getColumnTypesCallback, transaction);
            
            
            var getPrimaryKeysCallback = new Callback();
            getPrimaryKeysCallback.onSuccess = function(liquorBrandGetPrimaryKeys) {
                Log.debug("Home", "populateHome", "Liquor Brand Get Primary Keys: " + liquorBrandGetPrimaryKeys);
            }
            
            
            new LiquorBrand().getPrimaryKeysAsync(getPrimaryKeysCallback, transaction);
            
            
            var getMandatoryFieldsCallback = new Callback();
            getMandatoryFieldsCallback.onSuccess = function(liquorBrandGetMandatoryFields) {
                Log.debug("Home", "populateHome", "Liquor Brand Get Mandatory Fields: " + liquorBrandGetMandatoryFields);
            }
            
            
            new LiquorBrand().getMandatoryFieldsAsync(getMandatoryFieldsCallback, transaction);
            
            
            var getUniqueFieldsCallback = new Callback();
            getUniqueFieldsCallback.onSuccess = function(liquorBrandGetUniqueFields) {
                Log.debug("Home", "populateHome", "Liquor Brand Get Unique Fields: " + liquorBrandGetUniqueFields);
            }
            
            
            new LiquorBrand().getUniqueFieldsAsync(getUniqueFieldsCallback, transaction);
            
            
            var getForeignKeysCallback = new Callback();
            getForeignKeysCallback.onSuccess = function(liquorBrandGetForeignKeys) {
                Log.debug("Home", "populateHome", "Liquor Brand Get Foreign Keys: " + liquorBrandGetForeignKeys);
            }
            
            
            new LiquorBrand().getForeignKeysAsync(getForeignKeysCallback, transaction);
            
            
            var getApplicationDescriptor = new Callback();
            getApplicationDescriptor.onSuccess = function(applicationDescriptor) {
                Log.debug("Home", "populateHome", "Application Descriptor: " + applicationDescriptor);
            }
            
            
            ResourceManager.getInstance().getApplicationDescriptorAsync(getApplicationDescriptor, transaction);
        }
        
        callback.onSuccess = function() {
            
            if(REQUEST == ASYNC_REQUEST) {
                ++callbackCount;
                
                if((callbackCount + 1) == liquorBrands.length) {
                    Log.debug("GetLiquorBrands", "onRequestFinish", "Save Or Update Success: Populate Detail: " + callbackCount);
                    
                    fetchLiquorBrands();
                }
            } else if(REQUEST == ASYNC_TRANSACTION_REQUEST) {
                fetchLiquorBrands();
            }
        }
        
        callback.onFailure = function() {
            alert("Trasaction Failure");
        }
        
        
        
        if(REQUEST == ASYNC_REQUEST) {
            
            for(var i = 0;i < liquorBrands.length;i++) {
                var liquorBrand = liquorBrands[i];
                liquorBrand.setLiquor(liquor);
                
                liquorBrand.saveOrUpdateAsync(callback);
            }
        } else if(REQUEST == ASYNC_TRANSACTION_REQUEST) {
            var databaseDescriptor = new LiquorBrand().getDatabaseDescriptor();
            Database.beginTransactionAsync(databaseDescriptor, callback);
        } else if(REQUEST == SYNC_REQUEST) {
            
            for(var i = 0;i < liquorBrands.length;i++) {
                var liquorBrand = liquorBrands[i];
                liquorBrand.setLiquor(liquor);
                
                try {
                    liquorBrand.saveOrUpdate();
                } catch(de) {
                    Log.error("GetLiquors", "onServiceRequestFinish", "Database Exception caught while saving liquor brands in database, " + de.getMessage());
                    alert("error while saving liquor brands");
                }
            }
            
            fetchLiquorBrands();
        }
        
        
        function fetchLiquorBrands() {
            for(var i = 0;i < liquorBrands.length;i++) {
                liquor.addLiquorBrand(liquorBrands[i]);
            }
            
            
            populateDetail(liquorType);
        }
    }
    
    this.onTerminate = function(serviceException) {
        
    }
}

GetLiquorBrands.SERVICE_NAME = "SIMINOV-HYBRID-LIQUOR-BRANDS-SERVICE";
GetLiquorBrands.REQUEST_NAME = "GET-LIQUOR-BRANDS";

GetLiquorBrands.LIQUOR_NAME = "LIQUOR-NAME";


Function.extend(Service, GetLiquorBrands);
