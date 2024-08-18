import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AccountCreated,
  Approval,
  ApprovalForAll,
  Bid,
  BidPlaced,
  BiddableTokenPurchased,
  InfoChanged,
  Mint,
  OwnerChanged,
  PostBought,
  PostChanged,
  PostCreated,
  PostDetailsChanged,
  PostRewardClaimed,
  PostSold,
  RewardClaimed,
  RewardFactorChanged,
  RewardTokenChanged,
  Transfer
} from "../generated/ChainConnect/ChainConnect"

export function createAccountCreatedEvent(
  user: Address,
  userName: string,
  displayName: string,
  bio: string,
  image: string
): AccountCreated {
  let accountCreatedEvent = changetype<AccountCreated>(newMockEvent())

  accountCreatedEvent.parameters = new Array()

  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("userName", ethereum.Value.fromString(userName))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "displayName",
      ethereum.Value.fromString(displayName)
    )
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return accountCreatedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBidEvent(
  _user: Address,
  _postId: BigInt,
  _bidAmount: BigInt
): Bid {
  let bidEvent = changetype<Bid>(newMockEvent())

  bidEvent.parameters = new Array()

  bidEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  bidEvent.parameters.push(
    new ethereum.EventParam(
      "_postId",
      ethereum.Value.fromUnsignedBigInt(_postId)
    )
  )
  bidEvent.parameters.push(
    new ethereum.EventParam(
      "_bidAmount",
      ethereum.Value.fromUnsignedBigInt(_bidAmount)
    )
  )

  return bidEvent
}

export function createBidPlacedEvent(
  bidder: Address,
  postId: BigInt,
  bidAmount: BigInt
): BidPlaced {
  let bidPlacedEvent = changetype<BidPlaced>(newMockEvent())

  bidPlacedEvent.parameters = new Array()

  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )

  return bidPlacedEvent
}

export function createBiddableTokenPurchasedEvent(
  oldOwner: Address,
  newOwner: Address,
  amount: BigInt,
  id: BigInt
): BiddableTokenPurchased {
  let biddableTokenPurchasedEvent = changetype<BiddableTokenPurchased>(
    newMockEvent()
  )

  biddableTokenPurchasedEvent.parameters = new Array()

  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )
  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return biddableTokenPurchasedEvent
}

export function createInfoChangedEvent(
  displayName: string,
  bio: string,
  image: string
): InfoChanged {
  let infoChangedEvent = changetype<InfoChanged>(newMockEvent())

  infoChangedEvent.parameters = new Array()

  infoChangedEvent.parameters.push(
    new ethereum.EventParam(
      "displayName",
      ethereum.Value.fromString(displayName)
    )
  )
  infoChangedEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )
  infoChangedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return infoChangedEvent
}

export function createMintEvent(
  _user: Address,
  _bidDuration: BigInt,
  _status: i32,
  _price: BigInt,
  _metadata: string,
  _tokenURI: string,
  _tokenId: BigInt
): Mint {
  let mintEvent = changetype<Mint>(newMockEvent())

  mintEvent.parameters = new Array()

  mintEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "_bidDuration",
      ethereum.Value.fromUnsignedBigInt(_bidDuration)
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "_status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_status))
    )
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("_metadata", ethereum.Value.fromString(_metadata))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam("_tokenURI", ethereum.Value.fromString(_tokenURI))
  )
  mintEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return mintEvent
}

export function createOwnerChangedEvent(
  oldOwner: Address,
  newOwner: Address
): OwnerChanged {
  let ownerChangedEvent = changetype<OwnerChanged>(newMockEvent())

  ownerChangedEvent.parameters = new Array()

  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerChangedEvent
}

export function createPostBoughtEvent(
  to: Address,
  _from: Address,
  _tokenId: BigInt,
  _amount: BigInt
): PostBought {
  let postBoughtEvent = changetype<PostBought>(newMockEvent())

  postBoughtEvent.parameters = new Array()

  postBoughtEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  postBoughtEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  postBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  postBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return postBoughtEvent
}

export function createPostChangedEvent(
  _user: Address,
  _tokenId: BigInt,
  _sellValue: BigInt,
  _bidDuration: BigInt,
  _uri: string,
  _buyStatus: i32
): PostChanged {
  let postChangedEvent = changetype<PostChanged>(newMockEvent())

  postChangedEvent.parameters = new Array()

  postChangedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_sellValue",
      ethereum.Value.fromUnsignedBigInt(_sellValue)
    )
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_bidDuration",
      ethereum.Value.fromUnsignedBigInt(_bidDuration)
    )
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam("_uri", ethereum.Value.fromString(_uri))
  )
  postChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_buyStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(_buyStatus))
    )
  )

  return postChangedEvent
}

export function createPostCreatedEvent(
  id: BigInt,
  sender: Address,
  uri: string,
  buyStatus: i32,
  sellValue: BigInt,
  metadata: string
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(buyStatus))
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellValue",
      ethereum.Value.fromUnsignedBigInt(sellValue)
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )

  return postCreatedEvent
}

export function createPostDetailsChangedEvent(
  postId: BigInt,
  status: i32,
  price: BigInt,
  bidDuration: BigInt
): PostDetailsChanged {
  let postDetailsChangedEvent = changetype<PostDetailsChanged>(newMockEvent())

  postDetailsChangedEvent.parameters = new Array()

  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )
  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "bidDuration",
      ethereum.Value.fromUnsignedBigInt(bidDuration)
    )
  )

  return postDetailsChangedEvent
}

export function createPostRewardClaimedEvent(
  user: Address,
  postId: BigInt,
  reward: BigInt
): PostRewardClaimed {
  let postRewardClaimedEvent = changetype<PostRewardClaimed>(newMockEvent())

  postRewardClaimedEvent.parameters = new Array()

  postRewardClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  postRewardClaimedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  postRewardClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return postRewardClaimedEvent
}

export function createPostSoldEvent(
  from: Address,
  to: Address,
  amount: BigInt,
  id: BigInt
): PostSold {
  let postSoldEvent = changetype<PostSold>(newMockEvent())

  postSoldEvent.parameters = new Array()

  postSoldEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return postSoldEvent
}

export function createRewardClaimedEvent(
  _user: Address,
  _reward: BigInt,
  _claimId: BigInt,
  _likes: BigInt,
  _signature: Bytes,
  _tokenId: BigInt
): RewardClaimed {
  let rewardClaimedEvent = changetype<RewardClaimed>(newMockEvent())

  rewardClaimedEvent.parameters = new Array()

  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_reward",
      ethereum.Value.fromUnsignedBigInt(_reward)
    )
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_claimId",
      ethereum.Value.fromUnsignedBigInt(_claimId)
    )
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("_likes", ethereum.Value.fromUnsignedBigInt(_likes))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam("_signature", ethereum.Value.fromBytes(_signature))
  )
  rewardClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return rewardClaimedEvent
}

export function createRewardFactorChangedEvent(
  _owner: Address,
  _oldFactor: BigInt,
  _newFactor: BigInt
): RewardFactorChanged {
  let rewardFactorChangedEvent = changetype<RewardFactorChanged>(newMockEvent())

  rewardFactorChangedEvent.parameters = new Array()

  rewardFactorChangedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  rewardFactorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldFactor",
      ethereum.Value.fromUnsignedBigInt(_oldFactor)
    )
  )
  rewardFactorChangedEvent.parameters.push(
    new ethereum.EventParam(
      "_newFactor",
      ethereum.Value.fromUnsignedBigInt(_newFactor)
    )
  )

  return rewardFactorChangedEvent
}

export function createRewardTokenChangedEvent(
  _owner: Address,
  _from: Address,
  _to: Address
): RewardTokenChanged {
  let rewardTokenChangedEvent = changetype<RewardTokenChanged>(newMockEvent())

  rewardTokenChangedEvent.parameters = new Array()

  rewardTokenChangedEvent.parameters.push(
    new ethereum.EventParam("_owner", ethereum.Value.fromAddress(_owner))
  )
  rewardTokenChangedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  rewardTokenChangedEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )

  return rewardTokenChangedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
