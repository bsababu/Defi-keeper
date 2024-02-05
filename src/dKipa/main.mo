import List "mo:base/List";
import Debug "mo:base/Debug";


actor dKipa {
  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();
  
  public func createNewNote(titleText: Text, contentText: Text) {
    let newNote: Note = {
      title = titleText;
      content= contentText;
    };

    notes := List.push(newNote,notes);
    Debug.print(debug_show(notes));

  };

  public query func retrieveNotes(): async [Note] {
      return List.toArray(notes);
    };

  public func removeNote(id: Nat) {
    //let take
    //return List.toArray(notes);
    let oneList = List.take(notes, id);
    let secondList = List.drop(notes, id+1);

    notes := List.append(oneList,secondList);
  }
}