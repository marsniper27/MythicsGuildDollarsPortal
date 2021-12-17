/*
Parameters:
Type	Name	Description
name	from	Account to transfer assets from
name	to	Account to transfer assets to
vector<uint64_t>	asset_ids	Vector of asset ids that are to be transferred
string	memo	Memo attached to the transaction
Description:
Transfers one or more assets from one account to another. If the recipient did not previously own any assets, the sender pays the 112 bytes of RAM to create the recipient's scope in the assets table.

Note: Both <from> and <to> are notified using require_recipient().

Required Authorization:
<from></from>


transfer(name from, name to, vector<uint64_t>& assetids, memo)
*/