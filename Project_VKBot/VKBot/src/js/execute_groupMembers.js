var id = 58219172;
var count = 1000;
var result = [];

var first = API.groups.getMembers({
  "group_id": id,
  "count": count,
  "offset": 0
});
result.push(first.items);
var total = first.count;

var i = 1;
while (i * count < total && i < 25) {
    result.push(API.groups.getMembers({
      "group_id": id,
      "count": count,
      "offset": i * count
    }).items);
    i = i + 1;
}
return result;
