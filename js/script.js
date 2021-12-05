var jsonURL = 'https://restcountries.com/v3.1/all'
var search = "";
var content = "";
var isExecuting = true;

function getCountries(){

    if(isExecuting){

        isExecuting = false;
        $.getJSON(jsonURL, function(data){
            content = "";
            varSearch = search.toLowerCase();
            varSearch = varSearch.trim();
            for(i = 0; i < data.length; i++){
                country = data[i].name.common;
                varCountry = country.toLowerCase();
                varCountry = varCountry.trim();
                if(search.trim = "" || varCountry.includes(varSearch)){

                    flag = data[i].flags.svg;
                    common = data[i].name.common;
                    region = data[i].region;
                    population = data[i].population;
                    ccn3 = data[i].ccn3;
                    try{capital = data[i].capital[0];}catch(error){capital = 'undefined';}

                    population = population.toLocaleString('en-US');

                    content += '<div class="country_object">';
                    if(ccn3 == undefined){
                        content += '<img src="'+flag+'"class="country_object_img" onclick=\'openWebsite("error69")\'>';
                    }
                    else{
                        content += '<img src="'+flag+'"class="country_object_img" onclick=\'openWebsite("'+ccn3+'")\'>';
                    }
                    content += '<div class="country_object_desc">';
                    content += '<h3>'+common+'</h3>';
                    content += '<h4>Population:</h4><p>'+population+'</p></br>';
                    content += '<h4>Region:</h4><p>'+region+'</p></br>';
                    content += '<h4>Capital:</h4><p>'+capital+'</p></br>';
                    content += '</div></div>';

                }
            }
            document.getElementById("thumb_container").innerHTML = content;
        });
        isExecuting = true;
    }
}

function changeSearch(varSearch){

    search = varSearch;
    getCountries();

}

function changeRegion(varRegion){

    jsonURL = 'https://restcountries.com/v3.1/region/'+varRegion;
    search = document.getElementById("search").value;
    getCountries();

}
