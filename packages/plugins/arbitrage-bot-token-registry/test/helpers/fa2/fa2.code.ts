
export const Fa2Code: { __type: 'Fa2Code', protocol: string, code: object[] } = {
    __type: 'Fa2Code',
    protocol: 'PsDELPH1Kxsxt8f9eWbxQeRxkjfbxoqM52jvs5Y5fBxWWh4ifpo',
    code: JSON.parse(`[{"prim":"parameter","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","annots":["%balance_of"],"args":[{"prim":"list","annots":["%requests"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"contract","annots":["%callback"],"args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","annots":["%request"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"nat","annots":["%balance"]}]}]}]}]},{"prim":"pair","annots":["%burn"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%token_amount"]}]}]}]},{"prim":"or","args":[{"prim":"lambda","annots":["%execute"],"args":[{"prim":"unit"},{"prim":"list","args":[{"prim":"operation"}]}]},{"prim":"pair","annots":["%mint"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%token_amount"]}]}]}]}]},{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","annots":["%remove_administrator"],"args":[{"prim":"address","annots":["%administrator_to_remove"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"pair","annots":["%set_administrator"],"args":[{"prim":"address","annots":["%administrator_to_set"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"or","args":[{"prim":"pair","annots":["%set_token_metadata"],"args":[{"prim":"nat","annots":["%token_id"]},{"prim":"map","annots":["%token_info"],"args":[{"prim":"string"},{"prim":"bytes"}]}]},{"prim":"or","args":[{"prim":"list","annots":["%transfer"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%from_"]},{"prim":"list","annots":["%txs"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%to_"]},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"nat","annots":["%amount"]}]}]}]}]}]},{"prim":"list","annots":["%update_operators"],"args":[{"prim":"or","args":[{"prim":"pair","annots":["%add_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"pair","annots":["%remove_operator"],"args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]}]}]}]}]}]}]}]},{"prim":"storage","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"big_map","annots":["%administrators"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"unit"}]},{"prim":"big_map","annots":["%ledger"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"nat","annots":["%token_id"]}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","annots":["%operators"],"args":[{"prim":"pair","args":[{"prim":"address","annots":["%owner"]},{"prim":"pair","args":[{"prim":"address","annots":["%operator"]},{"prim":"nat","annots":["%token_id"]}]}]},{"prim":"unit"}]},{"prim":"pair","args":[{"prim":"big_map","annots":["%token_metadata"],"args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"nat","annots":["%token_id"]},{"prim":"map","annots":["%token_info"],"args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"big_map","annots":["%total_supply"],"args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"code","args":[[{"prim":"CAST","args":[{"prim":"pair","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"contract","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]}]}]},{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]},{"prim":"or","args":[{"prim":"lambda","args":[{"prim":"unit"},{"prim":"list","args":[{"prim":"operation"}]}]},{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]},{"prim":"or","args":[{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"or","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"map","args":[{"prim":"string"},{"prim":"bytes"}]}]},{"prim":"or","args":[{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"list","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"list","args":[{"prim":"or","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]}]}]}]}]}]}]},{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"unit"}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"unit"}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"map","args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"big_map","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]}]},{"prim":"LAMBDA","args":[{"prim":"pair","args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"unit"}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"unit"}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"map","args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"big_map","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]},{"prim":"pair","args":[{"prim":"list","args":[{"prim":"operation"}]},{"prim":"pair","args":[{"prim":"unit"},{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"unit"}]},{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]}]},{"prim":"unit"}]},{"prim":"pair","args":[{"prim":"big_map","args":[{"prim":"nat"},{"prim":"pair","args":[{"prim":"nat"},{"prim":"map","args":[{"prim":"string"},{"prim":"bytes"}]}]}]},{"prim":"big_map","args":[{"prim":"nat"},{"prim":"nat"}]}]}]}]}]}]},[{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"DUP"},{"prim":"CAR"},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"PAIR"},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"int"},{"int":"401"}]},{"prim":"FAILWITH"}]]},{"prim":"UNIT"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR","args":[{"int":"3"}]}]]},{"prim":"SWAP"},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"NIL","args":[{"prim":"pair","args":[{"prim":"pair","args":[{"prim":"address"},{"prim":"nat"}]},{"prim":"nat"}]}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"ITER","args":[[[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"GET","args":[{"int":"5"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"MEM"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_TOKEN_UNDEFINED"}]},{"prim":"FAILWITH"}]]},{"prim":"SWAP"},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"CAR"},{"prim":"CDR"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PAIR"},{"prim":"CONS"}]]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"CDR"},{"prim":"PUSH","args":[{"prim":"mutez"},{"int":"0"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"TRANSFER_TOKENS"},{"prim":"CONS"}],[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"DUG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"EXEC"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"GET","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"8"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]},{"prim":"SUB"},{"prim":"ISNAT"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"457"}]},{"prim":"FAILWITH"}],[]]},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"6"}]},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"GET","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"GET","args":[{"int":"6"}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"GET","args":[{"int":"3"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"458"}]},{"prim":"FAILWITH"}],[]]},{"prim":"SUB"},{"prim":"ISNAT"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"458"}]},{"prim":"FAILWITH"}],[]]},{"prim":"SOME"},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"GET","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"6"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"2"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},{"prim":"NONE","args":[{"prim":"nat"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"}],[{"prim":"SWAP"},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"}]]}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"DUG","args":[{"int":"2"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"PAIR"},{"prim":"EXEC"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"SWAP"},{"prim":"UNIT"},{"prim":"EXEC"},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"ITER","args":[[{"prim":"CONS"}]]},{"prim":"ITER","args":[[{"prim":"CONS"}]]}],[{"prim":"DUP"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"GET","args":[{"int":"3"}]},{"prim":"PAIR"},{"prim":"EXEC"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"GET","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"CAR"},{"prim":"CDR"},{"prim":"DIG","args":[{"int":"6"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"8"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]},{"prim":"ADD"},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"7"}]},{"prim":"CAR"},{"prim":"PAIR"},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"6"}]},{"prim":"DUP"},[{"prim":"DIP","args":[{"int":"4"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"5"}]}],{"prim":"GET","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"440"}]},{"prim":"FAILWITH"}],[]]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"GET","args":[{"int":"4"}]},{"prim":"ADD"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"6"}]},{"prim":"SWAP"}]]}]]}],[{"prim":"IF_LEFT","args":[[{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"PAIR"},{"prim":"EXEC"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"2"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"NONE","args":[{"prim":"unit"}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"}],[{"prim":"DUP"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"CDR"},{"prim":"PAIR"},{"prim":"EXEC"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},{"prim":"DIG","args":[{"int":"2"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"PUSH","args":[{"prim":"option","args":[{"prim":"unit"}]},{"prim":"Some","args":[{"prim":"Unit"}]}]},{"prim":"DIG","args":[{"int":"5"}]},{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"SWAP"}]]}],[{"prim":"IF_LEFT","args":[[[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"DIG","args":[{"int":"2"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},{"prim":"PAIR"},{"prim":"EXEC"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"DUG","args":[{"int":"2"}]},{"prim":"CAR"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET","args":[{"int":"5"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CAR"},{"prim":"MEM"},{"prim":"IF","args":[[{"prim":"SWAP"},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"}],[{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"5"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"SOME"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"5"}]},{"prim":"CAR"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"5"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"PUSH","args":[{"prim":"option","args":[{"prim":"unit"}]},{"prim":"Some","args":[{"prim":"Unit"}]}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"CAR"},{"prim":"SENDER"},{"prim":"PAIR"},{"prim":"UPDATE"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"6"}]},{"prim":"PUSH","args":[{"prim":"option","args":[{"prim":"nat"}]},{"prim":"Some","args":[{"int":"0"}]}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"CAR"},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"6"}]},{"prim":"SWAP"}]]}],[{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DROP"},{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"ITER","args":[[{"prim":"DUP"},{"prim":"CDR"},{"prim":"ITER","args":[[{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"CAR"},{"prim":"PAIR"},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"3"}]},{"prim":"CAR"},{"prim":"PAIR"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET","args":[{"int":"4"}]},[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}],{"prim":"CAR"},{"prim":"CDR"},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]},{"prim":"COMPARE"},{"prim":"GE"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_INSUFFICIENT_BALANCE"}]},{"prim":"FAILWITH"}]]},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"PUSH","args":[{"prim":"bool"},{"prim":"True"}]}],[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"GET","args":[{"int":"3"}]},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"GET","args":[{"int":"3"}]},{"prim":"SENDER"},[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}],{"prim":"CAR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"MEM"}]]},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OWNER"}]},{"prim":"FAILWITH"}]]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},[{"prim":"DIP","args":[{"int":"3"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"4"}]}],{"prim":"GET","args":[{"int":"4"}]},{"prim":"COMPARE"},{"prim":"GT"},{"prim":"IF","args":[[[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"GET","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"9"}]},{"prim":"CAR"},{"prim":"CDR"},[{"prim":"DIP","args":[{"int":"6"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"7"}]}],{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"265"}]},{"prim":"FAILWITH"}],[]]},{"prim":"SUB"},{"prim":"ISNAT"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"265"}]},{"prim":"FAILWITH"}],[]]},{"prim":"SOME"},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUP"},{"prim":"DUG","args":[{"int":"6"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"GET","args":[{"int":"4"}]},{"prim":"DIG","args":[{"int":"9"}]},{"prim":"CAR"},{"prim":"CDR"},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]}],[]]},{"prim":"ADD"},{"prim":"SOME"},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUG","args":[{"int":"4"}]},{"prim":"PUSH","args":[{"prim":"nat"},{"int":"0"}]},[{"prim":"DIP","args":[{"int":"5"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"6"}]}],{"prim":"CAR"},{"prim":"CDR"},[{"prim":"DIP","args":[{"int":"2"},[{"prim":"DUP"}]]},{"prim":"DIG","args":[{"int":"3"}]}],{"prim":"GET"},{"prim":"IF_NONE","args":[[{"prim":"PUSH","args":[{"prim":"int"},{"int":"269"}]},{"prim":"FAILWITH"}],[]]},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[{"prim":"SWAP"},{"prim":"DROP"},{"prim":"DIG","args":[{"int":"3"}]},[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"DIP","args":[[{"prim":"CDR"}]]}]],{"prim":"SWAP"},{"prim":"NONE","args":[{"prim":"nat"}]},{"prim":"DIG","args":[{"int":"4"}]},{"prim":"UPDATE"},{"prim":"SWAP"},{"prim":"PAIR"},{"prim":"PAIR"},{"prim":"DUG","args":[{"int":"2"}]}],[{"prim":"DROP","args":[{"int":"2"}]}]]}],[{"prim":"DROP","args":[{"int":"3"}]}]]}]]},{"prim":"DROP"}]]},{"prim":"DROP"}],[{"prim":"DUP"},{"prim":"ITER","args":[[{"prim":"IF_LEFT","args":[[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OWNER"}]},{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"PUSH","args":[{"prim":"option","args":[{"prim":"unit"}]},{"prim":"Some","args":[{"prim":"Unit"}]}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"3"}]},{"prim":"SWAP"}],[{"prim":"DUP"},{"prim":"CAR"},{"prim":"SENDER"},{"prim":"COMPARE"},{"prim":"EQ"},{"prim":"IF","args":[[],[{"prim":"PUSH","args":[{"prim":"string"},{"string":"FA2_NOT_OWNER"}]},{"prim":"FAILWITH"}]]},{"prim":"DIG","args":[{"int":"2"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"NONE","args":[{"prim":"unit"}]},{"prim":"DIG","args":[{"int":"3"}]},{"prim":"DUP"},{"prim":"GET","args":[{"int":"4"}]},{"prim":"SWAP"},{"prim":"DUP"},{"prim":"GET","args":[{"int":"3"}]},{"prim":"SWAP"},{"prim":"CAR"},{"prim":"PAIR","args":[{"int":"3"}]},{"prim":"UPDATE"},{"prim":"UPDATE","args":[{"int":"3"}]},{"prim":"SWAP"}]]}]]},{"prim":"DROP"}]]},{"prim":"NIL","args":[{"prim":"operation"}]}]]}]]}]]},{"prim":"NIL","args":[{"prim":"operation"}]},{"prim":"SWAP"},{"prim":"ITER","args":[[{"prim":"CONS"}]]},{"prim":"PAIR"}]]}]`)
};
