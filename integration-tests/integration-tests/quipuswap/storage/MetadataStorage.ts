// taken from https://github.com/madfish-solutions/quipuswap-core/blob/master/storage/MetadataStorage.js
import { MichelsonMap } from '@taquito/michelson-encoder';
import accounts from '../../accounts';
import * as dotenv from 'dotenv';
dotenv.config();

const standard = process.env.EXCHANGE_TOKEN_STANDARD;

export default {
  owners: [accounts.alice.pkh],
  metadata: MichelsonMap.fromLiteral({
    '': Buffer.from('tezos-storage:quipu', 'ascii').toString('hex'),
    quipu: Buffer.from(
      JSON.stringify({
        version: 'v0.0.1',
        description: 'Quipuswap Share Pool Token',
        name: 'Quipu Token',
        authors: ['Madfish.Solutions <info@madfish.solutions>'],
        homepage: 'https://quipuswap.com/',
        source: {
          tools: ['Ligo', 'Flextesa'],
          location: 'https://ligolang.org/',
        },
        interfaces: [standard == 'FA2' ? 'TZIP-12' : 'TZIP-7', 'TZIP-16'],
        errors: [],
        views: [
          {
            name: 'token_metadata',
            implementations: [
              {
                michelsonStorageView: {
                  parameter: {
                    prim: 'nat',
                  },
                  returnType: {
                    prim: 'pair',
                    args: [
                      {
                        prim: 'nat',
                      },
                      {
                        prim: 'map',
                        args: [
                          {
                            prim: 'string',
                          },
                          {
                            prim: 'bytes',
                          },
                        ],
                      },
                    ],
                  },
                  code: [
                    { prim: 'DROP' },
                    {
                      prim: 'EMPTY_MAP',
                      args: [{ prim: 'string' }, { prim: 'bytes' }],
                    },
                    {
                      prim: 'PUSH',
                      args: [
                        { prim: 'bytes' },
                        {
                          bytes:
                            '68747470733a2f2f7175697075737761702e636f6d2f51504c502e706e67',
                        },
                      ],
                    },
                    { prim: 'SOME' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'string' }, { string: 'thumbnailUri' }],
                    },
                    { prim: 'UPDATE' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'bytes' }, { bytes: '515054' }],
                    },
                    { prim: 'SOME' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'string' }, { string: 'symbol' }],
                    },
                    { prim: 'UPDATE' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'bytes' }, { bytes: '74727565' }],
                    },
                    { prim: 'SOME' },
                    {
                      prim: 'PUSH',
                      args: [
                        { prim: 'string' },
                        { string: 'shouldPreferSymbol' },
                      ],
                    },
                    { prim: 'UPDATE' },
                    {
                      prim: 'PUSH',
                      args: [
                        { prim: 'bytes' },
                        { bytes: '5175697075204c5020546f6b656e' },
                      ],
                    },
                    { prim: 'SOME' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'string' }, { string: 'name' }],
                    },
                    { prim: 'UPDATE' },
                    {
                      prim: 'PUSH',
                      args: [
                        { prim: 'bytes' },
                        {
                          bytes:
                            '51756970757377617020536861726520506f6f6c20546f6b656e',
                        },
                      ],
                    },
                    { prim: 'SOME' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'string' }, { string: 'description' }],
                    },
                    { prim: 'UPDATE' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'bytes' }, { bytes: '36' }],
                    },
                    { prim: 'SOME' },
                    {
                      prim: 'PUSH',
                      args: [{ prim: 'string' }, { string: 'decimals' }],
                    },
                    { prim: 'UPDATE' },
                    { prim: 'PUSH', args: [{ prim: 'nat' }, { int: '0' }] },
                    { prim: 'PAIR' },
                  ],
                },
              },
            ],
          },
        ],
      }),
      'ascii'
    ).toString('hex'),
  }),
};
