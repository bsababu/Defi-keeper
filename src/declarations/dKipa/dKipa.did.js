export const idlFactory = ({ IDL }) => {
  const Note = IDL.Record({ 'title' : IDL.Text, 'content' : IDL.Text });
  return IDL.Service({
    'createNewNote' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'removeNote' : IDL.Func([IDL.Nat], [], ['oneway']),
    'retrieveNotes' : IDL.Func([], [IDL.Vec(Note)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
