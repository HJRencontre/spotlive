import {Injectable} from '@nestjs/common';
import {UpdateCatDto} from './dto/update-cat.dto';
import {CatInterface} from "src/cats/interfaces/cat.interface";
import {CreateCatDto} from "src/cats/dto/create-cat.dto";

@Injectable()
export class CatsService {
  private readonly cats: CatInterface[] = [];

  create(cat: CreateCatDto) {
    this.cats.push(cat);
  }

  findAll(): CreateCatDto[] {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats[id];
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    this .cats.splice(id, 1);
  }
}
