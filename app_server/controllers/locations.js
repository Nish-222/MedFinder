module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: ' MedFinder',
        pageHeader: {
            title: ' MEDFINDER',
            strapline: 'FIND THE NEAREST DOCTOR'
    },
    sidebar: "Looking for a doctor near you?  MedFinder helps you find a doctor to get your checkup done.Let  MedFinder help you fulfill your need.",
    locations: [{
        name: 'Dr.Anandh',
        address: '122 Perfect Health Medical Centre and Clinics, Uppal',
        rating: 3,
        facilities: ['Body Checkup','Diagnostics','Medical Services','First-aid'],
        distance: '100m'
    }, {
        name: 'Dr.Sudha',
        address: 'Apollo Diagnostics,Uppal',
        rating: 4,
        facilities: ['Diagnostics','First-aid','Scanning','Pharmacy','Medical Services'],
        distance: '200m'
    }, {
        name: 'Dr.Nayani',
        address: 'TX Hospital, Uppal',
        rating: 5,
        facilities: ['Cancer Checkup','Body Checkup','Medical Services','First-aid','Pharmacy'],
        distance: '250m'
    }]
   });
   };
   module.exports.locationInfo = function(req, res){
    res.render('location-info', { title: 'LocationInfo' });
    };
   module.exports.locationInfo1 = function(req, res){
    res.render('location-info1', { title: 'LocationInfo1' });
    };
   module.exports.locationInfo2 = function(req, res){
    res.render('location-info2', { title: 'LocationInfo2' });
    };
   module.exports.addReview = function(req, res){
    res.render('location-review-form', { title: 'ADD REVIEW' });
    };