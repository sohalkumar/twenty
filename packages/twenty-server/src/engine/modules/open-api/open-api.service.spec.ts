import { Test, TestingModule } from '@nestjs/testing';

import { OpenApiService } from 'src/engine/modules/open-api/open-api.service';
import { ObjectMetadataService } from 'src/engine-metadata/object-metadata/object-metadata.service';
import { TokenService } from 'src/engine/modules/auth/services/token.service';
import { EnvironmentService } from 'src/engine/integrations/environment/environment.service';

describe('OpenApiService', () => {
  let service: OpenApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OpenApiService,
        {
          provide: TokenService,
          useValue: {},
        },
        {
          provide: ObjectMetadataService,
          useValue: {},
        },
        {
          provide: EnvironmentService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<OpenApiService>(OpenApiService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
