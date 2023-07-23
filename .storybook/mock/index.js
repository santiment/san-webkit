import { parse, Kind } from 'graphql';
import { CURRENT_USER_MOCK } from './user.js';
import { ANNUAL_DISCOUNT_MOCK } from './annualDiscount.js';
import { SAVED_CARD_MOCK } from './savedCard.js';
export var MOCKS = [CURRENT_USER_MOCK, ANNUAL_DISCOUNT_MOCK, SAVED_CARD_MOCK];
export function ApiMock(req, schema) {
    var _a = JSON.parse(req.requestBody), query = _a.query, variables = _a.variables;
    var operation = parse(query).definitions[0];
    if (operation.kind !== Kind.OPERATION_DEFINITION) {
        return;
    }
    MOCKS.forEach(function (mocker) {
        var _a = mocker, mock = _a.mock, query = _a.query;
        if (schema[mocker.schema] !== undefined) {
            schema['query ' + query] = mock(schema[mocker.schema]);
        }
    });
    var hasData = false;
    var data = {};
    var error = null;
    operation.selectionSet.selections.forEach(function (query) {
        var _a;
        if (query.kind !== Kind.FIELD)
            return;
        var name = query.name.value;
        var mocked = schema['query ' + name];
        if (mocked !== undefined) {
            if (mocked.error) {
                error = mocked.error;
            }
            else {
                data[((_a = query.alias) === null || _a === void 0 ? void 0 : _a.value) || name] = mocked;
                mapAlises(mocked, query);
            }
            hasData = true;
        }
    });
    if (hasData)
        return Promise.resolve({ data: data, error: error });
    var xhr = req.passthrough();
    return new Promise(function (resolve) {
        xhr.onloadend = function () {
            resolve(JSON.parse(xhr.response));
        };
    });
}
function mapAlises(data, query) {
    var _a;
    if (query.kind !== Kind.FIELD)
        return;
    (_a = query.selectionSet) === null || _a === void 0 ? void 0 : _a.selections.forEach(function (query) {
        if (query.kind !== Kind.FIELD)
            return;
        if (!query.alias)
            return;
        var value = data[query.name.value];
        data[query.alias.value] = value;
        return mapAlises(value, query);
    });
}
