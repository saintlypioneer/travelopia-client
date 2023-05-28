describe('Travelopia', function() {
    beforeEach(function() {
      // Mock the GET /api/trips response
      cy.intercept('GET', '/api/trips', { fixture: 'trips.json' }).as('getTrips');
      // Mock the POST /api/trips response
      cy.intercept('POST', '/api/trips', { success: true }).as('postTrip');
      // Assuming your app runs on http://localhost:3000
      cy.visit('http://localhost:3000');
    });
  
    it('Shows the form on the homepage', function() {
      cy.get('h1').should('contain', "Hey there! Let's plan a trip...");
    });
  
    it('Shows the trips when navigating to /trips', function() {
      cy.get('a').contains('TRIPS').click();
      cy.get('h1').should('contain', 'Trips');
    });
  
    it('Submits the form successfully', function() {
      cy.get('input[name=name]').type('Test Name');
      cy.get('input[name=email]').type('test@test.com');
      cy.get('select[name=country]').select('india');
      cy.get('input[name=travellerCount]').type('2');
      cy.get('input[name=budget]').type('1000');
      cy.get('form').submit();
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`data saved successfully`);
      });
    });
  
    it('Loads trips from the server', function() {
      cy.get('a').contains('TRIPS').click();
      cy.wait('@getTrips');
      cy.get('table').should('exist');
    });
  
    it('Sends new trip to the server', function() {
      cy.get('input[name=name]').type('Test Name');
      cy.get('input[name=email]').type('test@test.com');
      cy.get('select[name=country]').select('india');
      cy.get('input[name=travellerCount]').type('2');
      cy.get('input[name=budget]').type('1000');
      cy.get('form').submit();
      cy.wait('@postTrip');
    });
  });
  