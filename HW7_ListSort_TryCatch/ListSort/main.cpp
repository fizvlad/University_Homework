#include <iostream>
#include "list.cpp"

using namespace std;

int main()
{
    list <int> a;
    a.push(4);
    a.push(3);
    a.push(0);
    a.push(1);
    a.push(1);
    a.push(0);
    a.push(111111);
    a.sort();
    for (listIterator <int> i = a.begin(); i != a.end(); ++i) {
        cout << *i << endl;
    }
    return 0;
}
