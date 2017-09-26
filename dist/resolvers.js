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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb2x2ZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kY290dHJlbGwvRG9jdW1lbnRzL0FwcHMvc3dxbC9zcmMvIiwic291cmNlcyI6WyJyZXNvbHZlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQjtBQVMvQix1QkFBNkIsR0FBVzs7UUFDdEMsTUFBTSxHQUFHLEdBQUcsTUFBTSxvQkFBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sSUFBSSxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTlCLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQUE7QUFtQlEsc0NBQWE7QUFWdEIsc0JBQTRCLElBQVksRUFBRSxHQUFXOztRQUNuRCxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBRWQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QixNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUFBO0FBRXVCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ25vZGUtZmV0Y2gnO1xuaW1wb3J0IHsgR3JhcGhRTE9iamVjdFR5cGUsIH0gZnJvbSAnZ3JhcGhxbCc7XG5cbi8qKlxuICogUmV0cmVpdmVzIHRoZSBhc3NldCBmcm9tIHRoZSBVUkwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCBzdHJpbmcgb2YgdGhlIHJlc291cmNlXG4gKiBAcmV0dXJuIHtQcm9taXNlPEdyYXBoUUxPYmplY3RUeXBlPn0gLSBBc3NldFxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRBc3NldEJ5VVJMKHVybDogc3RyaW5nKTogUHJvbWlzZTxHcmFwaFFMT2JqZWN0VHlwZT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ganNvbjtcbn1cblxuLyoqXG4gKiBSZXRyZWl2ZXMgdGhlIGlkIG9mIGEgcmVzb3VyY2UgZnJvbSB0aGUgcmVzb3VyY2UncyBVUkwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgLSBQbHVyYWwgZm9ybSBvZiByZXNvdXJjZSB0eXBlLlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFN0cmluZyBmcm9tIHdoaWNoIHJlc291cmNlIElEIGNhbiBiZSBmb3VuZC5cbiAqIEByZXR1cm4ge3N0cmluZ3xudWxsfSBpZCAoaWYgZm91bmQpLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZXRJREZyb21VUkwodHlwZTogc3RyaW5nLCB1cmw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nfG51bGw+IHtcbiAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCdcXFxcLycgKyB0eXBlICsgJ1xcXFwvKFxcXFxkKyknKTtcbiAgY29uc3QgbWF0Y2hlcyA9IHJlLmV4ZWModXJsKTtcbiAgbGV0IGlkID0gbnVsbDtcblxuICBpZiAobWF0Y2hlcykgaWQgPSBtYXRjaGVzWzFdO1xuXG4gIHJldHVybiBpZDtcbn1cblxuZXhwb3J0IHsgZ2V0QXNzZXRCeVVSTCwgZ2V0SURGcm9tVVJMIH07XG4iXX0=