/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '@polymer/polymer/polymer-legacy.js';

import { NeonSharedElementAnimatableBehavior } from '../neon-shared-element-animatable-behavior.js';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';

Polymer({
  _template: html`

`,

  is: 'a-resizable-page',

  behaviors: [
    NeonSharedElementAnimatableBehavior,
    IronResizableBehavior
  ]
});

Polymer({
  _template: html`

`,

  is: 'b-resizable-page',

  behaviors: [
    NeonSharedElementAnimatableBehavior,
    IronResizableBehavior
  ]
});

Polymer({
  _template: html`

`,

  is: 'c-resizable-page',

  behaviors: [
    NeonSharedElementAnimatableBehavior,
    IronResizableBehavior
  ]
});
