/*
 * Copyright (c) 2022 Robert Bosch Manufacturing Solutions GmbH
 *
 * See the AUTHORS file(s) distributed with this work for
 * additional information regarding authorship.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * SPDX-License-Identifier: MPL-2.0
 */

import {CharacteristicInstantiator} from '../characteristic/characteristic-instantiator';
import {MetaModelElementInstantiator} from '../meta-model-element-instantiator';
import {NamedNode} from 'n3';
import {Collection} from '../../aspect-meta-model';
import {CollectionCharacteristicInstantiator} from './collection-characteristic-instantiator';
import {DefaultSortedSet} from '../../aspect-meta-model/characteristic/default-sorted-set';

export class SortedSetCharacteristicInstantiator extends CollectionCharacteristicInstantiator {
    constructor(metaModelElementInstantiator: MetaModelElementInstantiator, nextProcessor: CharacteristicInstantiator) {
        super(metaModelElementInstantiator, nextProcessor);
    }

    protected creatCollectionObject(): Collection {
        return new DefaultSortedSet(null, null, null, null);
    }

    shouldProcess(nameNode: NamedNode): boolean {
        return this.metaModelElementInstantiator.sammC.SortedSetCharacteristic().equals(nameNode);
    }
}
