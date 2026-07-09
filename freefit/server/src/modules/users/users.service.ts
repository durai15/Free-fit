import { Injectable } from '@nestjs/common';
import { PaginationQueryDto } from '../../common/dto/pagination-query.dto';

@Injectable()
export class UsersService {
  findAll(query: PaginationQueryDto) {
    return {
      data: [],
      meta: query
    };
  }
}
