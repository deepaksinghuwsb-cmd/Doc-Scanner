const DB_NAME='doc-scanner-db',STORE='pages',META_KEY='doc-scanner-workspace-v1';
let dbPromise;
function db(){if(!dbPromise)dbPromise=new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,1);req.onupgradeneeded=()=>req.result.createObjectStore(STORE,{keyPath:'id'});req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});return dbPromise}
function transact(mode,work){return db().then(database=>new Promise((resolve,reject)=>{const tx=database.transaction(STORE,mode),store=tx.objectStore(STORE);let result;try{result=work(store)}catch(e){reject(e);return}tx.oncomplete=()=>resolve(result);tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error)}))}
export async function listPages(){const database=await db(),records=await new Promise((resolve,reject)=>{const req=database.transaction(STORE).objectStore(STORE).getAll();req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)});const meta=JSON.parse(localStorage.getItem(META_KEY)||'{}'),byId=new Map(records.map(p=>[p.id,p]));return (meta.order||records.map(p=>p.id)).map(id=>byId.get(id)).filter(Boolean)}
function writeMeta(pages,selectedId){localStorage.setItem(META_KEY,JSON.stringify({order:pages.map(p=>p.id),selectedId,updatedAt:Date.now()}))}
export async function savePages(pages,selectedId=null){await transact('readwrite',s=>{pages.forEach(p=>s.put(p));const keep=new Set(pages.map(p=>p.id));s.getAllKeys().onsuccess=e=>e.target.result.forEach(id=>{if(!keep.has(id))s.delete(id)})});writeMeta(pages,selectedId)}
export async function savePage(page,pages,selectedId){await transact('readwrite',s=>s.put(page));writeMeta(pages,selectedId)}
export async function removePage(id,pages,selectedId){await transact('readwrite',s=>s.delete(id));writeMeta(pages,selectedId)}
