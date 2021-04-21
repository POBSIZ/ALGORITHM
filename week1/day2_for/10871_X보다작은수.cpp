#include <iostream>
using namespace std;

int main(){
	int N, X, listNum, listSize;
	cin >> N >> X;
	int Nlist[N];
	
	for(int i=0; i<N; i++){
		cin >> listNum;
		Nlist[i] = listNum;
	}
	
	for(int k=0; k<N; k++){
		if(Nlist[k] < X){
			listSize += 1;	
		}
	}
	
	int Plist[listSize];
	
	for(int j=0; j<N; j++){
		if(Nlist[j] < X){
			Plist[j] = Nlist[j];	
		}
	}
	
	for(int h=0; h<listSize; h++){
		cout << Plist[h] << " ";
	}
}

