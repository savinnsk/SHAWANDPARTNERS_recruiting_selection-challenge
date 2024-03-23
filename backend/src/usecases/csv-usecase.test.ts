
import { MatchResultByA, getAllDataFromCsvExample } from '../mocks/mocks';
import { csvHandlerUseCase , readCSVFile } from './csv-usecase';




describe('csvHandlerUseCase', () => {


  it('should return values sending query "a" ', async () => {
    const result = await csvHandlerUseCase("a");

    expect(result).toEqual(MatchResultByA);
  });



  it('should return empty array by query ")@(SD" ', async () => {
    const result = await csvHandlerUseCase(")@(SD");
    expect(result).toEqual([]);
  });


});



describe('readCSVFile', () => {


  it('should find values at file example', async () => {
    const result = await readCSVFile("./uploads/1711199716550-file.csv");
    expect(result).toEqual(getAllDataFromCsvExample);
  });

});