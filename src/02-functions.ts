import {Friend, Colleague } from './myTypes'
import {friends, colleagues} from './01-basics'


function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(fs: Friend[]): string[] {
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
function highestExtension(cs: Colleague[]): Colleague {
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}
console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, department: string, email: string): void {
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
