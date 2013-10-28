

function DatabaseUtils() {

    this.prepareData = function() {
        createLiquors();
    }

    function createLiquors() {

        //Make Gin Object
        var gin = new Liquor();
        gin.setLiquorType(Liquor.LIQUOR_TYPE_GIN);
        gin.setDescription(gin_description);
        gin.setHistory(gin_history);
        gin.setLink(gin_link);
        gin.setAlcholContent(gin_alchol_content);


        //Make Rum Object
        var rum = new Liquor();
        rum.setDescription(rum_description);
        rum.setLiquorType(Liquor.LIQUOR_TYPE_RUM);
        rum.setHistory(rum_history);
        rum.setLink(rum_link);
        rum.setAlcholContent(rum_alchol_content);


        //Make Tequilla Object
        var tequilla = new Liquor();
        tequilla.setLiquorType(Liquor.LIQUOR_TYPE_TEQUILA);
        tequilla.setDescription(tequilla_description);
        tequilla.setHistory(tequilla_history);
        tequilla.setLink(tequilla_link);
        tequilla.setAlcholContent(tequilla_alchol_content);


        //Make Vodka Object
        var vodka = new Liquor();
        vodka.setLiquorType(Liquor.LIQUOR_TYPE_VODKA);
        vodka.setDescription(vodka_descrption);
        vodka.setHistory(vodka_history);
        vodka.setLink(vodka_link);
        vodka.setAlcholContent(vodka_alchol_content);


        //Make Whiskey Object
        var whiskey = new Liquor();
        whiskey.setLiquorType(Liquor.LIQUOR_TYPE_WHISKEY);
        whiskey.setDescription(whiskey_description);
        whiskey.setHistory(whiskey_history);
        whiskey.setLink(whiskey_link);
        whiskey.setAlcholContent(whiskey_alchol_content);


        //Make Beer Object
        var beer = new Liquor();
        beer.setLiquorType(Liquor.LIQUOR_TYPE_BEER);
        beer.setDescription(beer_description);
        beer.setHistory(beer_history);
        beer.setLink(beer_link);
        beer.setAlcholContent(beer_alchol_content);


        //Make Wine Object
        var wine = new Liquor();
        wine.setLiquorType(Liquor.LIQUOR_TYPE_WINE);
        wine.setDescription(wine_description);
        wine.setHistory(wine_history);
        wine.setLink(wine_link);
        wine.setAlcholContent(wine_alchol_content);


//        try {
//            var databaseDescriptor = gin.getDatabaseDescriptor();

//            Database.beginTransaction(databaseDescriptor);

            createGinBrands(gin);
            createRumBrands(rum);
            createTequilaBrands(tequilla);
            createVodkaBrands(vodka);
            createWhiskeyBrands(whiskey);
            createBeerBrands(beer);
            createWineBrands(wine);

            gin.saveOrUpdate();
            rum.saveOrUpdate();
            tequilla.saveOrUpdate();
            vodka.saveOrUpdate();
            whiskey.saveOrUpdate();
            beer.saveOrUpdate();
            wine.saveOrUpdate();

//            Database.commitTransaction(databaseDescriptor);
//       } catch(databaseException) {
//           	Log.loge("DatabaseUtils", "createLiquors", "DatabaseException caught while creating liquors");
//       } finally {
//            Database.endTransaction(databaseDescriptor);
//       }

    }

    function createGinBrands(liquor) {

        var theBotanist = new LiquorBrand();
//        theBotanist.setLiquor(liquor);
        theBotanist.setBrandName(LiquorBrand.GIN_BRAND_THE_BOTANIST);
        theBotanist.setCountry(gin_brand_the_botanist_country);
        theBotanist.setDescription(gin_brand_the_botanist_description);
        theBotanist.setLink(gin_brand_the_botanist_link);

		liquor.addLiquorBrand(theBotanist);

        var tanqueray = new LiquorBrand();
//        tanqueray.setLiquor(liquor);
        tanqueray.setBrandName(LiquorBrand.GIN_BRAND_TANQUERAY);
        tanqueray.setCountry(gin_brand_tanqueray_country);
        tanqueray.setDescription(gin_brand_tanqueray_description);
        tanqueray.setLink(gin_brand_tanqueray_link);

		liquor.addLiquorBrand(tanqueray);


/*        try {
            theBotanist.saveOrUpdate();
            tanqueray.saveOrUpdate();
       	} catch(databaseException) {
           	Log.loge("DatabaseUtils", "createGinBrands", "DatabaseException caught while creating gin brands");
		}*/
    }

    function createRumBrands(liquor) {

        var bacardi = new LiquorBrand();
//        bacardi.setLiquor(liquor);
        bacardi.setBrandName(LiquorBrand.RUM_BRAND_BACARDI);
        bacardi.setCountry(rum_brand_bacardi_country);
        bacardi.setDescription(rum_brand_bacardi_description);
        bacardi.setLink(rum_brand_bacardi_link);

		liquor.addLiquorBrand(bacardi);

        var oldMonk = new LiquorBrand();
//        oldMonk.setLiquor(liquor);
        oldMonk.setBrandName(LiquorBrand.RUM_BRAND_OLD_MONK);
        oldMonk.setCountry(rum_brand_old_monk_country);
        oldMonk.setDescription(rum_brand_old_monk_description);
        oldMonk.setLink(rum_brand_old_monk_link);

		liquor.addLiquorBrand(oldMonk);

/*        try {
            bacardi.saveOrUpdate();
            oldMonk.saveOrUpdate();
       	} catch(databaseException) {
          	Log.loge("DatabaseUtils", "createRumBrands", "DatabaseException caught while creating rumbrands");
		}*/
    }

    function createTequilaBrands(liquor) {

        var patron = new LiquorBrand();
//        patron.setLiquor(liquor);
        patron.setBrandName(LiquorBrand.TEQUILA_BRAND_PATRON);
        patron.setCountry(tequila_brand_patron_country);
        patron.setDescription(tequila_brand_patron_description);
        patron.setLink(tequila_brand_patron_link);

		liquor.addLiquorBrand(patron);

        var sauzate = new LiquorBrand();
//        sauzate.setLiquor(liquor);
        sauzate.setBrandName(LiquorBrand.TEQUILA_BRAND_SAUZA);
        sauzate.setCountry(tequila_brand_sauzate_country);
        sauzate.setDescription(tequila_brand_sauzate_description);
        sauzate.setLink(tequila_brand_sauzate_link);

		liquor.addLiquorBrand(sauzate);

/*        try {
            patron.saveOrUpdate();
            sauzate.saveOrUpdate();
        } catch(databaseException) {
            Log.loge("DatabaseUtils", "createTequilaBrands", "DatabaseException caught while creating tequila brands");
        }*/
    }

    function createVodkaBrands(liquor) {

        var absolut  = new LiquorBrand();
//        absolut.setLiquor(liquor);
        absolut.setBrandName(LiquorBrand.VODKA_BRAND_ABSOLUT);
        absolut.setCountry(vodka_brand_absolut_country);
        absolut.setDescription(vodka_brand_absolut_description);
        absolut.setLink(vodka_brand_absolut_link);

		liquor.addLiquorBrand(absolut);

        var smirnoff = new LiquorBrand();
//        smirnoff.setLiquor(liquor);
        smirnoff.setBrandName(LiquorBrand.VODKA_BRAND_SMIRNOFF);
        smirnoff.setCountry(vodka_brand_smirnoff_country);
        smirnoff.setDescription(vodka_brand_smirnoff_description);
        smirnoff.setLink(vodka_brand_smirnoff_link);

		liquor.addLiquorBrand(smirnoff);

/*        try {
            absolut.saveOrUpdate();
            smirnoff.saveOrUpdate();
        } catch(databaseException) {
            Log.loge("DatabaseUtils", "createVodkaBrands", "DatabaseException caught while creating vodka brands");
        }*/
    }

    function createWhiskeyBrands(liquor) {

        var jackDaniels = new LiquorBrand();
//        jackDaniels.setLiquor(liquor);
        jackDaniels.setBrandName(LiquorBrand.WHISKEY_BRAND_JACK_DANIELS);
        jackDaniels.setCountry(whiskey_brand_jack_daniels_country);
        jackDaniels.setDescription(whiskey_brand_jack_daniels_description);
        jackDaniels.setLink(whiskey_brand_jack_daniels_link);

		liquor.addLiquorBrand(jackDaniels);

        var johnnieWalker = new LiquorBrand();
//        johnnieWalker.setLiquor(liquor);
        johnnieWalker.setBrandName(LiquorBrand.WHISKEY_BRAND_JOHNNIE_WALKER);
        johnnieWalker.setCountry(whiskey_brand_johnnie_walker_country);
        johnnieWalker.setDescription(whiskey_brand_johnnie_walker_description);
        johnnieWalker.setLink(whiskey_brand_johnnie_walker_link);

		liquor.addLiquorBrand(johnnieWalker);

/*        try {
            jackDaniels.saveOrUpdate();
            johnnieWalker.saveOrUpdate();
        } catch(databaseException) {
            Log.loge("DatabaseUtils", "createWhiskeyBrands", "DatabaseException caught while creating whiskey brands");
   		}*/
    }

    function createBeerBrands(liquor) {

        var heineken = new LiquorBrand();
//        heineken.setLiquor(liquor);
        heineken.setBrandName(LiquorBrand.BEER_BRAND_HEINEKEN);
        heineken.setCountry(beer_brand_heineken_country);
        heineken.setDescription(beer_brand_heineken_description);
        heineken.setLink(beer_brand_heineken_link);

		liquor.addLiquorBrand(heineken);

        var kingfisher = new LiquorBrand();
//        kingfisher.setLiquor(liquor);
        kingfisher.setBrandName(LiquorBrand.BEER_BRAND_KINGFISHER);
        kingfisher.setCountry(beer_brand_kingfisher_country);
        kingfisher.setDescription(beer_brand_kingfisher_description);
        kingfisher.setLink(beer_brand_kingfisher_link);

		liquor.addLiquorBrand(kingfisher);


/*        try {
            heineken.saveOrUpdate();
            kingfisher.saveOrUpdate();
        } catch(databaseException) {
            Log.loge("DatabaseUtils", "createBeerBrands", "DatabaseException caught while creating beer brands");
        }*/
    }

    function createWineBrands(liquor) {

        var gallo = new LiquorBrand();
//        gallo.setLiquor(liquor);
        gallo.setBrandName(LiquorBrand.WINE_BRAND_GALLO);
        gallo.setCountry(wine_brand_gallo_country);
        gallo.setDescription(wine_brand_gallo_description);
        gallo.setLink(wine_brand_gallo_link);

		liquor.addLiquorBrand(gallo);

        var yellowTail = new LiquorBrand();
//        yellowTail.setLiquor(liquor);
        yellowTail.setBrandName(LiquorBrand.WINE_BRAND_YELLOW_TAIL);
        yellowTail.setCountry(wine_brand_yellow_tail_country);
        yellowTail.setDescription(wine_brand_yellow_tail_description);
        yellowTail.setLink(wine_brand_yellow_tail_link);

		liquor.addLiquorBrand(yellowTail);


/*        try {
            gallo.saveOrUpdate();
            yellowTail.saveOrUpdate();
        } catch(databaseException) {
            Log.loge("DatabaseUtils", "createWineBrands", "DatabaseException caught while creating wines brands");
        }*/
    }

}
