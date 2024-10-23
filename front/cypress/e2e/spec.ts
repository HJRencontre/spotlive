import {Then, When} from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://duckduckgo.com/");
});

Then("I should see a search bar", () => {
  cy.get("h2.homepage-cta-section_title__Lovig").should(
    "contain.text",
    "Switch to DuckDuckGo. It’s private and free!",
  );
});