/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import {
  BULK_ACTIONS_BTN,
  COLLAPSED_ACTION_BTN,
  CREATE_NEW_RULE_BTN,
  CUSTOM_RULES_BTN,
  DELETE_RULE_ACTION_BTN,
  DELETE_RULE_BULK_BTN,
  LOAD_PREBUILT_RULES_BTN,
  LOADING_INITIAL_PREBUILT_RULES_TABLE,
  LOADING_SPINNER,
  PAGINATION_POPOVER_BTN,
  RULE_CHECKBOX,
  RULE_NAME,
  RULES_TABLE,
  THREE_HUNDRED_ROWS,
  RELOAD_PREBUILT_RULES_BTN,
} from '../screens/signal_detection_rules';

export const changeToThreeHundredRowsPerPage = () => {
  cy.get(PAGINATION_POPOVER_BTN).click({ force: true });
  cy.get(THREE_HUNDRED_ROWS).click();
};

export const deleteFirstRule = () => {
  cy.get(COLLAPSED_ACTION_BTN)
    .first()
    .click({ force: true });
  cy.get(DELETE_RULE_ACTION_BTN).click();
};

export const deleteSelectedRules = () => {
  cy.get(BULK_ACTIONS_BTN).click({ force: true });
  cy.get(DELETE_RULE_BULK_BTN).click();
};

export const filterByCustomRules = () => {
  cy.get(CUSTOM_RULES_BTN).click({ force: true });
  cy.get(LOADING_SPINNER).should('exist');
  cy.get(LOADING_SPINNER).should('not.exist');
};

export const goToCreateNewRule = () => {
  cy.get(CREATE_NEW_RULE_BTN).click({ force: true });
};

export const goToRuleDetails = () => {
  cy.get(RULE_NAME).click({ force: true });
};

export const loadPrebuiltDetectionRules = () => {
  cy.get(LOAD_PREBUILT_RULES_BTN)
    .should('exist')
    .click({ force: true });
};

export const reloadDeletedRules = () => {
  cy.get(RELOAD_PREBUILT_RULES_BTN).click({ force: true });
};

export const selectNumberOfRules = (numberOfRules: number) => {
  for (let i = 0; i < numberOfRules; i++) {
    cy.get(RULE_CHECKBOX)
      .eq(i)
      .click({ force: true });
  }
};

export const waitForLoadElasticPrebuiltDetectionRulesTableToBeLoaded = () => {
  cy.get(LOADING_INITIAL_PREBUILT_RULES_TABLE).should('exist');
  cy.get(LOADING_INITIAL_PREBUILT_RULES_TABLE).should('not.exist');
};

export const waitForPrebuiltDetectionRulesToBeLoaded = () => {
  cy.get(LOAD_PREBUILT_RULES_BTN).should('not.exist');
  cy.get(RULES_TABLE).should('exist');
};

export const waitForRulesToBeLoaded = () => {
  cy.get(LOADING_SPINNER).should('exist');
  cy.get(LOADING_SPINNER).should('not.exist');
};
