import fs  from 'fs';

// read XML
const testXml = fs.readFileSync('xml/test.xml', 'utf8');


test('console xml', () => {
    console.log(testXml);
});