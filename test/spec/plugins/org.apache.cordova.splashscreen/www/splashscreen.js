describe('org.apache.cordova.splashscreen', function() {
    
    describe('upon initialization', function() {       
        it('should define \'window.navigator\'', function() {
            expect(window.navigator).to.be.an('object');
        });
        
        it('should define \'window.navigator.splashscreen\'', function() {
            expect(window.navigator.splashscreen).to.be.an('object');
        });
        
        it('should define \'window.navigator.splashscreen.hide()\'', function() {
            expect(window.navigator.splashscreen.hide).to.be.a('function');
        });
        
        it('should define \'window.navigator.splashscreen.show()\'', function() {
            expect(window.navigator.splashscreen.show).to.be.a('function');
        });
    });
    
});