/* tslint:disable:no-unused-variable */
import { XwordComponent } from './xword.component';

import {
    expect, it, iit, xit,
    describe, ddescribe, xdescribe,
    beforeEach, beforeEachProviders, withProviders,
    async, inject
} from '@angular/core/testing';

import { TestComponentBuilder } from '@angular/compiler/testing';

import { By }             from '@angular/platform-browser';
import { provide }        from '@angular/core';
import { ViewMetadata }   from '@angular/core';
import { PromiseWrapper } from '@angular/core/src/facade/promise';

////////  SPECS  /////////////

describe('XwordComponent with new', function () {
    it('should instantiate component', () => {
        expect(new XwordComponent()).toBeDefined('Whoopie!');
    });
});

describe('XwordComponent with TCB', function () {

    it('should instantiate component',
        async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {

            tcb.createAsync(XwordComponent).then(fixture => {
                expect(fixture.componentInstance instanceof XwordComponent).toBe(true, 'should create XwordComponent');
            });
        })));

});