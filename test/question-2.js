//function to parse a url and return detailed information

function urlParser(url){
    var urlObj = {};
    urlObj['Protocol'] = url.split(':')[0];
    urlObj['Host domain'] = url.split('//')[1].split('/')[0];
    urlObj['Resource Param'] = url.split('//')[1].split('/')[1].split('?')[0];
    urlObj['Query'] = url.split('?')[1];

    console.log(urlObj);
}

urlParser('https://googleapis/maps?version=1')