import {
  AccountCreated as AccountCreatedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  Bid as BidEvent,
  BidPlaced as BidPlacedEvent,
  BiddableTokenPurchased as BiddableTokenPurchasedEvent,
  InfoChanged as InfoChangedEvent,
  Mint as MintEvent,
  OwnerChanged as OwnerChangedEvent,
  PostBought as PostBoughtEvent,
  PostChanged as PostChangedEvent,
  PostCreated as PostCreatedEvent,
  PostDetailsChanged as PostDetailsChangedEvent,
  PostRewardClaimed as PostRewardClaimedEvent,
  PostSold as PostSoldEvent,
  RewardClaimed as RewardClaimedEvent,
  RewardFactorChanged as RewardFactorChangedEvent,
  RewardTokenChanged as RewardTokenChangedEvent,
  Transfer as TransferEvent
} from "../generated/ChainConnect/ChainConnect"
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
  Transfer,
  UserRewards
} from "../generated/schema"

export function handleAccountCreated(event: AccountCreatedEvent): void {
  let entity = new AccountCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.userName = event.params.userName
  entity.displayName = event.params.displayName
  entity.bio = event.params.bio
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBid(event: BidEvent): void {
  let entity = new Bid(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._user = event.params._user
  entity._postId = event.params._postId
  entity._bidAmount = event.params._bidAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBidPlaced(event: BidPlacedEvent): void {
  let entity = new BidPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bidder = event.params.bidder
  entity.postId = event.params.postId
  entity.bidAmount = event.params.bidAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBiddableTokenPurchased(
  event: BiddableTokenPurchasedEvent
): void {
  let entity = new BiddableTokenPurchased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner
  entity.amount = event.params.amount
  entity.ChainConnect_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInfoChanged(event: InfoChangedEvent): void {
  let entity = new InfoChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.displayName = event.params.displayName
  entity.bio = event.params.bio
  entity.image = event.params.image

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMint(event: MintEvent): void {
  let entity = new Mint(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._bidDuration = event.params._bidDuration
  entity._status = event.params._status
  entity._price = event.params._price
  entity._metadata = event.params._metadata
  entity._tokenURI = event.params._tokenURI
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostBought(event: PostBoughtEvent): void {
  let entity = new PostBought(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity._from = event.params._from
  entity._tokenId = event.params._tokenId
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostChanged(event: PostChangedEvent): void {
  let entity = new PostChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._user = event.params._user
  entity._tokenId = event.params._tokenId
  entity._sellValue = event.params._sellValue
  entity._bidDuration = event.params._bidDuration
  entity._uri = event.params._uri
  entity._buyStatus = event.params._buyStatus

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let entity = new PostCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.ChainConnect_id = event.params.id
  entity.sender = event.params.sender
  entity.uri = event.params.uri
  entity.buyStatus = event.params.buyStatus
  entity.sellValue = event.params.sellValue
  entity.metadata = event.params.metadata

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostDetailsChanged(event: PostDetailsChangedEvent): void {
  let entity = new PostDetailsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.postId = event.params.postId
  entity.status = event.params.status
  entity.price = event.params.price
  entity.bidDuration = event.params.bidDuration

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostRewardClaimed(event: PostRewardClaimedEvent): void {
  let entity = new PostRewardClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.postId = event.params.postId
  entity.reward = event.params.reward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePostSold(event: PostSoldEvent): void {
  let entity = new PostSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.amount = event.params.amount
  entity.ChainConnect_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardClaimed(event: RewardClaimedEvent): void {
  let entity = new RewardClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

let user = UserRewards.load(event.params._user);

  if (!user) {
    user = new UserRewards(event.params._user);
  }

  user.rewardClaimed = event.params._reward;
  user.claimedAt = event.block.timestamp;
  user.totalClaimed = user.totalClaimed.plus(event.params._reward);
  user.transactionHash = event.transaction.hash;
  user.save();
  
  entity._user = event.params._user
  entity._reward = event.params._reward
  entity._claimId = event.params._claimId
  entity._likes = event.params._likes
  entity._signature = event.params._signature
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

  
}

export function handleRewardFactorChanged(
  event: RewardFactorChangedEvent
): void {
  let entity = new RewardFactorChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._oldFactor = event.params._oldFactor
  entity._newFactor = event.params._newFactor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRewardTokenChanged(event: RewardTokenChangedEvent): void {
  let entity = new RewardTokenChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._owner = event.params._owner
  entity._from = event.params._from
  entity._to = event.params._to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
