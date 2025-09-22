import {Friend, Colleague, EmailContact } from './myTypes'
import {friends, colleagues} from './01-basics'


function older(f: Friend) {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(fs: Friend[]) {
  const output: string[] = [];

  for (let i = 0; i < fs.length; i++) {
    let f = fs[i];
    f.age++; //add the 1 year
    let message = `${f.name} is now ${f.age}`; 
    output.push(message); //pushes new element into array
  }

  return output;
}


console.log(older(friends[0]))

console.log(allOlder(friends));


// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string) {
    let c: Colleague = {
        name: name,
        department: department,
        contact: {
            email: email,
            extension: highestExtension(cs).contact.extension+1
        }
    }
    cs.push(c)
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));



function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max? : number
): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}

console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW


function findFriends(fs: Friend[], criterion: (f: Friend) => boolean): string[] {
    const output: string[] = []

    for (let i = 0; i < fs.length; i++){
        let f = fs[i];
        if (criterion(f)){
            output.push(f.name)
        }
    }

    return output;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));
