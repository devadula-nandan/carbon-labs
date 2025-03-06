/**
 * @license
 *
 * Copyright IBM Corp. 2025
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, fixture, expect } from '@open-wc/testing';
import '@carbon-labs/wc-toolbar/es/index.js';

describe('clabs-toolbar', function () {
  it('should render with cds-button minimum attributes', async () => {
    const el = await fixture(
      html`<clabs-toolbar> button </clabs-toolbar>`
    );

    await expect(el).dom.to.equalSnapshot();
    await expect(el).shadowDom.to.be.accessible();
  });
});
