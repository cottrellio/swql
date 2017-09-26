"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
function getAssetByURL(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield node_fetch_1.default(url);
        const json = yield res.json();
        return json;
    });
}
exports.getAssetByURL = getAssetByURL;
function getAssetByURI(uri) {
    return __awaiter(this, void 0, void 0, function* () {
        const BASE_URL = 'http://swapi.co/api';
        return getAssetByURL(`${BASE_URL}${uri}`);
    });
}
exports.getAssetByURI = getAssetByURI;
function getIDFromURL(type, url) {
    return __awaiter(this, void 0, void 0, function* () {
        const re = new RegExp('\\/' + type + '\\/(\\d+)');
        const matches = re.exec(url);
        let id = null;
        if (matches)
            id = matches[1];
        return id;
    });
}
exports.getIDFromURL = getIDFromURL;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kY290dHJlbGwvRG9jdW1lbnRzL0FwcHMvc3dxbC9zcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQVMvQix1QkFBNkIsR0FBVzs7UUFDdEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQUE7QUErQlEsc0NBQWE7QUF2QnRCLHVCQUE2QixHQUFXOztRQUN0QyxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUV2QyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztDQUFBO0FBbUJ1QixzQ0FBYTtBQVZyQyxzQkFBNEIsSUFBWSxFQUFFLEdBQVc7O1FBQ25ELE1BQU0sRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDbEQsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7UUFFZCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdCLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0NBQUE7QUFFc0Msb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnbm9kZS1mZXRjaCc7XG5pbXBvcnQgeyBHcmFwaFFMT2JqZWN0VHlwZSwgfSBmcm9tICdncmFwaHFsJztcblxuLyoqXG4gKiBSZXRyZWl2ZXMgdGhlIGFzc2V0IGZyb20gdGhlIFVSTC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHN0cmluZyBvZiB0aGUgcmVzb3VyY2VcbiAqIEByZXR1cm4ge1Byb21pc2U8R3JhcGhRTE9iamVjdFR5cGU+fSAtIEFzc2V0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0QnlVUkwodXJsOiBzdHJpbmcpOiBQcm9taXNlPEdyYXBoUUxPYmplY3RUeXBlPiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIHJldHVybiBqc29uO1xufVxuXG4vKipcbiAqIFJldHJlaXZlcyB0aGUgYXNzZXQgZnJvbSBVUkkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVyaSAtIFVSSSBvZiB0aGUgYXNzZXQuXG4gKiBAcmV0dXJuIHtQcm9taXNlPEdyYXBoUUxPYmplY3RUeXBlPn0gLSBBc3NldFxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRBc3NldEJ5VVJJKHVyaTogc3RyaW5nKSB7XG4gIGNvbnN0IEJBU0VfVVJMID0gJ2h0dHA6Ly9zd2FwaS5jby9hcGknO1xuXG4gIHJldHVybiBnZXRBc3NldEJ5VVJMKGAke0JBU0VfVVJMfSR7dXJpfWApO1xufVxuXG4vKipcbiAqIFJldHJlaXZlcyB0aGUgaWQgb2YgYSByZXNvdXJjZSBmcm9tIHRoZSByZXNvdXJjZSdzIFVSTC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAtIFBsdXJhbCBmb3JtIG9mIHJlc291cmNlIHR5cGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gU3RyaW5nIGZyb20gd2hpY2ggcmVzb3VyY2UgSUQgY2FuIGJlIGZvdW5kLlxuICogQHJldHVybiB7c3RyaW5nfG51bGx9IGlkIChpZiBmb3VuZCkuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldElERnJvbVVSTCh0eXBlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmd8bnVsbD4ge1xuICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJ1xcXFwvJyArIHR5cGUgKyAnXFxcXC8oXFxcXGQrKScpO1xuICBjb25zdCBtYXRjaGVzID0gcmUuZXhlYyh1cmwpO1xuICBsZXQgaWQgPSBudWxsO1xuXG4gIGlmIChtYXRjaGVzKSBpZCA9IG1hdGNoZXNbMV07XG5cbiAgcmV0dXJuIGlkO1xufVxuXG5leHBvcnQgeyBnZXRBc3NldEJ5VVJMLCBnZXRBc3NldEJ5VVJJLCBnZXRJREZyb21VUkwgfTtcbiJdfQ==