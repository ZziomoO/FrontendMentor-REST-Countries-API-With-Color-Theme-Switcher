function getCountry(ccn3){

    jsonURL = "https://restcountries.com/v3.1/alpha/"+ccn3;
    $.getJSON(jsonURL, function(data){

        try{flag = data[0].flags.svg;}catch(error){flag = "undefined.svg"};
        try{common = data[0].name.common;}catch(error){common = "undefined"};

        try{
            native = Object.keys(data[0].name.nativeName)
            native = data[0].name.nativeName[native[0]].common;
        }
        catch(error){
            native = "undefined";
        }

        try{population = data[0].population.toLocaleString('en-US');}catch(error){population = "undefined";}
        try{region = data[0].region;}catch(error){region = "undefined";}
        try{sub = data[0].subregion;}catch(error){sub = "undefined";}
        try{capital = data[0].capital[0];}catch(error){capital = "undefined";}
        try{tld = data[0].tld[0];}catch(error){tld = "undefined";}
        
        try{
            currencies = Object.keys(data[0].currencies);
            currencies = data[0].currencies[currencies[0]].name;
        }catch(error){
            currencies = "undefined";
        }

        try{
            langHolder = Object.keys(data[0].languages);
            lang = ""
            for(i = 0; i < langHolder.length; i++){
                if(i!=0){
                    lang += ', ';
                }
                lang += data[0].languages[langHolder[i]];
            }
        }
        catch(error){
            lang = "undefined";
        }

        desc = '<img src="'+flag+'"><div id="data_container">';
        desc += '<h3>'+common+'</h3><div id="desc_container"><div>';
        desc += '<h4>Native Name:</h4><p>'+native+'</p></br>';
        desc += '<h4>Population:</h4><p>'+population+'</p></br>';
        desc += '<h4>Region:</h4><p>'+region+'</p></br>';
        desc += '<h4>Sub Region:</h4><p>'+sub+'</p></br>';
        desc += '<h4>Capital:</h4><p>'+capital+'</p></br>';
        desc += '</div><div>'
        desc += '<h4>Top Level Domain:</h4><p>'+tld+'</p></br>';
        desc += '<h4>Currencies:</h4><p>'+currencies+'</p></br>';
        desc += '<h4>Languages:</h4><p>'+lang+'</p></br>';
        desc += '</div></div><div id="border_container"></div></div>';

        document.getElementById("main_container").innerHTML = desc;

        borderContainer = document.getElementById("border_container");
        borderContainer.innerHTML = '<h4>Border Countries: </h4>';

        try{
            for(i = 0; i < data[0].borders.length; i++){
                jsonURL = "https://restcountries.com/v3.1/alpha/"+data[0].borders[i];
                $.getJSON(jsonURL, function(data){
                    border = data[0].name.common;
                    ccn3 = data[0].ccn3;
                    if(ccn3 == undefined){
                        borderContainer.innerHTML += '<div id="border_country" onclick=\'openWebsite("error69")\'>'+border+'</div>';
                    }
                    else{
                        borderContainer.innerHTML += '<div id="border_country" onclick=\'openWebsite("'+ccn3+'")\'>'+border+'</div>';
                    }
                })
            }
        }
        catch(error){
            borderContainer.innerHTML += '<div id="border_country">Undefinded</div>';
        }

    });
}
