//! Redis integration for Actix framework.
//!
//! ## Documentation
//! * [API Documentation (Development)](http://actix.github.io/actix-redis/actix_redis/)
//! * [API Documentation (Releases)](https://docs.rs/actix-redis/)
//! * [Chat on gitter](https://gitter.im/actix/actix)
//! * Cargo package: [actix-redis](https://crates.io/crates/actix-redis)
//! * Minimum supported Rust version: 1.26 or later
//!
#[macro_use]
extern crate log;

#[macro_use]
extern crate derive_more;

extern crate redis as redisrs;

mod redis;

#[cfg(feature = "web")]
mod session;
#[cfg(feature = "web")]
pub use actix_web::cookie::SameSite;
#[cfg(feature = "web")]
pub use session::RedisSession;

/// General purpose actix redis error
#[derive(Debug, Display, From)]
pub enum Error {
    #[display(fmt = "Redis error {}", _0)]
    Redis(redisrs::RedisError),
    /// Receiving message during reconnecting
    #[display(fmt = "Redis: Not connected")]
    NotConnected,
}

// re-export
pub use crate::redis::{RedisCmd, RedisActor, RedisValue};
