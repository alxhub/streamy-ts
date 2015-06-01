/// <reference path="../../../typings/angular2/angular2.d.ts" />

declare var require: Function;

var angular = require('../../../node_modules/angular/modules/angular2/angular2');

export interface Key {
  toString(): string;
}

export class Issue {
	id: string;
	name: string;
	author: string;
	comments: IssueComment[]
}

class IssueComment {
	author: string;
	comment: string;
	tsMillis: number;
}

class IssueKey implements Key {
	id: string;

  toString(): string {
    return this.id;
  }
}

/**
 * Compares two values for equivalency. Two scalar values are equivalent if they
 * are equal. Two objects are equivalent if they have the same properties and the
 * values of those properties are equivalent.
 */
function equivalent(a: any, b: any): boolean {
  // Any objects which 
  if (a === b) return true;
	if (typeof a !== 'object' || typeof b !== 'object') return false;
	if (a === null || b === null) return false;
	var aKeys = Object.getOwnPropertyNames(a);
	var bKeys = Object.getOwnPropertyNames(b);

	if (aKeys.length !== bKeys.length) return false;

	for (var i = 0; i < aKeys.length; i++) {
		if (!equivalent(a[aKeys[i]], b[aKeys[i]])) return false;
	}
	return true;
}

class Entry {
  entity: any;
  version: number;

  constructor(entity: any, version: number) {
    this.entity = entity;
    this.version = version;
  }
}

class LocalDataStore {

  data: {[key: string]: Entry};

  constructor() {
    this.data = {};
  }

  insert(key: Key, entity: any, version: number): boolean {
    var strKey = key.toString();
    if (this.data.hasOwnProperty(strKey)) {
      // Compare versions and make sure the new one is actually newer.
      if (this.data[strKey].version > version) {
        // Rejected - internal version is newer.
        return false;
      }
      this.data[strKey].entity = entity;
      this.data[strKey].version = version;
    }
    this.data[strKey] = new Entry(entity, version);
  }

  lookup(key: Key): angular.Observable<Entry> {
    var strKey = key.toString();
    if (!this.data.hasOwnProperty(strkey)) {
      return null;
    }

  }
}

